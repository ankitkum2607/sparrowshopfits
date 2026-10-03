"use client";

import { useEffect } from "react";

const COUNT_MS = 1200;

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!target) return;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / COUNT_MS, 1);
    const eased = 1 - (1 - t) ** 3;
    el.textContent = Math.round(target * eased).toLocaleString("en-US");
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * The page's only animation runtime. Reveals use IntersectionObserver + CSS;
 * GSAP is loaded after hydration and only drives the scroll-scrubbed pieces.
 */
export function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // Anything already on screen is marked before hidden states switch on, so nothing flashes.
    const pending = reveals.filter((el) => {
      const visible = el.getBoundingClientRect().top < window.innerHeight;
      if (visible) el.classList.add("in");
      return !visible;
    });
    root.classList.add("fx");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("in");
          countUp(el);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    pending.forEach((el) => io.observe(el));

    let cancelled = false;
    let revert = () => {};

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ ease: "none" });
        const mm = gsap.matchMedia();
        revert = () => mm.revert();

        mm.add("all", () => {
          // Hero is sticky, so it scrubs against the first viewport of scroll rather than itself.
          gsap
            .timeline({ scrollTrigger: { start: 0, end: () => window.innerHeight, scrub: true } })
            .to("[data-hero-img]", { scale: 1 }, 0)
            .to("[data-hero-copy]", { yPercent: -14 }, 0)
            .to("[data-hero-shade]", { opacity: 0.65 }, 0);

          gsap.fromTo(
            "[data-timeline]",
            { "--p": 0 },
            { "--p": 1, scrollTrigger: { trigger: "[data-timeline]", start: "top 80%", end: "bottom 55%", scrub: true } },
          );

          const plan = { trigger: "[data-plan-track]", start: "top top", end: "bottom bottom", scrub: true };
          gsap.fromTo("[data-plan]", { "--p": 1 }, { "--p": 0, scrollTrigger: plan });
          gsap.fromTo("[data-plan-photo]", { scale: 1.12 }, { scale: 1, scrollTrigger: plan });

          gsap.fromTo(
            "[data-cta-img]",
            { scale: 1.14 },
            { scale: 1, scrollTrigger: { trigger: "[data-cta]", start: "top bottom", end: "bottom bottom", scrub: true } },
          );
        });

        // Portfolio parallax and stacking are desktop-only; mobile keeps the plain CSS reveals.
        mm.add("(min-width: 768px)", () => {
          const projects = gsap.utils.toArray<HTMLElement>("[data-project]");
          const list = projects[0]?.parentElement;
          if (!list) return;
          // The cards are sticky, so their own rects lie once stuck. Derive each card's
          // natural page offset from the (non-sticky) list instead.
          const naturalTop = (i: number) => list.getBoundingClientRect().top + window.scrollY + i * projects[0].offsetHeight;
          const entering = (i: number) => ({
            start: () => naturalTop(i) - window.innerHeight,
            end: () => naturalTop(i),
            scrub: true,
          });
          projects.forEach((el, i) => {
            gsap.fromTo(el.querySelector("[data-project-img]"), { scale: 1.16 }, { scale: 1, scrollTrigger: entering(i) });
            gsap.fromTo(el.querySelector("[data-project-title]"), { yPercent: 70 }, { yPercent: 0, scrollTrigger: entering(i) });
            if (i < projects.length - 1) {
              gsap.to(el.querySelector("[data-project-shade]"), { opacity: 0.75, scrollTrigger: entering(i + 1) });
            }
          });
        });

        document.fonts.ready.then(() => ScrollTrigger.refresh());
      })
      .catch(() => {
        // Scrub effects are progressive enhancement; the page is complete without them.
      });

    return () => {
      cancelled = true;
      io.disconnect();
      revert();
      root.classList.remove("fx");
    };
  }, []);

  return null;
}
