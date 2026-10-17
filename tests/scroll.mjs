import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const gsapRoot = process.env.GSAP_ROOT || path.dirname(require.resolve('gsap/package.json'));
const errors = [];
const server = createServer(async (request, response) => {
  const file = path.resolve(root, '.' + new URL(request.url, 'http://localhost').pathname);
  if (!file.startsWith(root)) {
    response.writeHead(403).end();
    return;
  }
  try {
    const data = await readFile(file);
    response.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : 'text/html');
    response.end(data);
  } catch {
    response.writeHead(404).end();
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  page.on('pageerror', error => errors.push(error.message));
  await page.route('https://cdn.jsdelivr.net/npm/gsap@3.15.0/**', async route => {
    const name = new URL(route.request().url()).pathname.split('/gsap@3.15.0/')[1];
    await route.fulfill({ path: path.join(gsapRoot, name), contentType: 'text/javascript', headers: { 'Access-Control-Allow-Origin': '*' } });
  });
  const url = `http://127.0.0.1:${server.address().port}/skills/gsap-scrolltrigger/examples/horizontal/index.html`;
  await page.goto(url);
  await page.waitForFunction(() => ScrollTrigger.getById('horizontal-demo'));

  async function verifyPosition(fraction) {
    await page.evaluate(fraction => {
      const trigger = ScrollTrigger.getById('horizontal-demo');
      window.scrollTo(0, trigger.start + fraction * (trigger.end - trigger.start));
      ScrollTrigger.update();
    }, fraction);
    await page.waitForFunction(fraction => {
      const track = document.querySelector('.horizontal-el');
      const viewport = document.querySelector('.horizontal-viewport');
      const expected = -(track.scrollWidth - viewport.clientWidth) * fraction;
      return Math.abs(Number(gsap.getProperty(track, 'x')) - expected) < 2;
    }, fraction);
    if (fraction > 0 && fraction < 1) {
      const top = await page.locator('.horizontal-viewport').evaluate(el => el.getBoundingClientRect().top);
      assert.ok(Math.abs(top) < 2, `Pinned viewport moved to ${top}`);
    }
  }

  for (const fraction of [0, 0.5, 1, 0.25, 0]) await verifyPosition(fraction);
  await page.setViewportSize({ width: 760, height: 650 });
  await page.evaluate(() => ScrollTrigger.refresh());
  for (const fraction of [0.5, 1, 0]) await verifyPosition(fraction);

  const markdown = await readFile(path.join(root, 'skills/gsap-scrolltrigger/SKILL.md'), 'utf8');
  const section = markdown.split('## Horizontal scroll (containerAnimation)')[1];
  const snippet = section.match(/```javascript\n([\s\S]*?)```/)[1];
  await page.evaluate(snippet => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    gsap.set('.horizontal-el', { clearProps: 'transform' });
    window.scrollTo(0, 0);
    new Function(snippet)();
    ScrollTrigger.refresh();
  }, snippet.replaceAll('.nested-el-1', '.nested-el').replaceAll('.nested-wrapper-1', '.nested-wrapper'));
  await page.evaluate(() => {
    const trigger = ScrollTrigger.getAll().find(item => item.pin);
    window.scrollTo(0, trigger.end);
    ScrollTrigger.update();
  });
  await page.waitForFunction(() => {
    const track = document.querySelector('.horizontal-el');
    return Math.abs(Number(gsap.getProperty(track, 'x')) + track.scrollWidth - window.innerWidth) < 2;
  });

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  assert.equal(await page.evaluate(() => ScrollTrigger.getAll().length), 0);
  assert.equal(await page.locator('.horizontal-el').evaluate(el => getComputedStyle(el).display), 'block');
  assert.equal(await page.locator('.panel').last().evaluate(el => el.offsetTop > window.innerHeight), true);

  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(url.replace('gsap-scrolltrigger/examples/horizontal', 'gsap-core/examples/vanilla'));
  await page.waitForFunction(() => {
    const style = getComputedStyle(document.querySelector('#single'));
    return Math.abs(new DOMMatrixReadOnly(style.transform).m41 - 120) < 1 && style.opacity === '1';
  });
  assert.equal(await page.locator('#single').evaluate(el => getComputedStyle(el).opacity), '1');
  assert.deepEqual(errors, []);
  console.log('Passed: forward/reverse scrolling, pinning, resize, documentation snippet, reduced motion and vanilla example.');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
