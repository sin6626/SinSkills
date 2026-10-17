#!/usr/bin/env python3
"""Validate the portable skill collection without installing dependencies."""
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

root = Path(__file__).resolve().parents[1]
expected = {
    'skills': {'crop-the-image', 'gsap-core', 'gsap-timeline', 'gsap-scrolltrigger', 'gsap-react', 'gsap-frameworks'},
    'optional': {'prototype', 'uni-app', 'course-report-diagrams', 'writing-great-skills', 'git-story-film', 'cc-clean'},
}
errors = []
entries = []
for group, names in expected.items():
    found = {p.parent.name for p in (root / group).glob('*/SKILL.md')}
    if found != names:
        errors.append(f'{group}: missing={names - found}, unexpected={found - names}')
    entries.extend((root / group / name / 'SKILL.md') for name in sorted(found))

for path in entries:
    text = path.read_text()
    match = re.match(r'\A---\n(.*?)\n---\n', text, re.S)
    if not match:
        errors.append(f'{path.relative_to(root)}: invalid frontmatter')
        continue
    header = match.group(1)
    if not re.search(rf'^name:\s*{re.escape(path.parent.name)}\s*$', header, re.M):
        errors.append(f'{path.relative_to(root)}: name must match directory')
    if not re.search(r'^description:\s*\S', header, re.M):
        errors.append(f'{path.relative_to(root)}: missing description')

documents = [root / 'README.md', root / 'SOURCES.md', *(root / 'plugin').rglob('*.md'), *(root / 'skills').rglob('*.md'), *(root / 'optional').rglob('*.md')]
for path in documents:
    text = path.read_text()
    if re.search(r'/Users/[^/\s]+/|/home/[^/\s]+/', text):
        errors.append(f'{path.relative_to(root)}: machine-specific absolute path')
    for href in re.findall(r'\[[^\]\n]*\]\(([^\s)]+)\)', text):
        url = urlsplit(href)
        if url.scheme or not url.path:
            continue
        target = path.parent / unquote(url.path)
        if not target.exists():
            errors.append(f'{path.relative_to(root)}: broken link {href}')
        else:
            # Case-insensitive macOS paths must also work on Linux.
            current = path.parent
            for part in Path(unquote(url.path)).parts:
                if part == '..':
                    current = current.parent
                elif part != '.':
                    if part not in {p.name for p in current.iterdir()}:
                        errors.append(f'{path.relative_to(root)}: case mismatch {href}')
                        break
                    current /= part

if errors:
    raise SystemExit('\n'.join(errors))
print(f'Validated {len(entries)} Skills and local links in {len(documents)} Markdown files.')
