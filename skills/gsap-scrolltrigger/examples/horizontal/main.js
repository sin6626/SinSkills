gsap.registerPlugin(ScrollTrigger);

const media = gsap.matchMedia();
media.add("(prefers-reduced-motion: no-preference)", () => {
  const viewport = document.querySelector(".horizontal-viewport");
  const scrollingEl = viewport.querySelector(".horizontal-el");
  const distance = () => Math.max(0, scrollingEl.scrollWidth - viewport.clientWidth);
  const scrollTween = gsap.to(scrollingEl, {
    x: () => -distance(),
    ease: "none",
    scrollTrigger: {
      id: "horizontal-demo",
      trigger: viewport,
      pin: true,
      start: "top top",
      end: () => `+=${Math.max(1, distance())}`,
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".nested-el", {
    y: 100,
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".nested-wrapper",
      start: "left center",
      toggleActions: "play none none reset",
    },
  });
});
