"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="testimonials-heading" className="section relative z-10 bg-bone">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <h2 id="testimonials-heading" data-reveal className="label mb-8 text-stone">
            In their words
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:block">
            {testimonials.map((t, i) => (
              <li key={t.company}>
                <button
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  className={`label flex min-h-11 items-center gap-3 transition-colors duration-300 ${
                    i === active ? "text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  <span
                    className={`h-px bg-accent transition-[width] duration-500 ease-out-expo ${i === active ? "w-6" : "w-0"}`}
                  />
                  {t.company}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* All quotes share one grid cell so the section height never jumps; only opacity changes. */}
        <div data-reveal className="grid lg:col-span-9">
          {testimonials.map((t, i) => (
            <figure
              key={t.company}
              aria-hidden={i !== active}
              className={`col-start-1 row-start-1 flex flex-col justify-between gap-10 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <blockquote className="text-[clamp(1.6rem,3.5vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.02em] [font-stretch:88%]">
                <span className="text-accent">“</span>
                {t.quote}
                <span className="text-accent">”</span>
              </blockquote>
              <figcaption className="border-t border-ink/15 pt-5">
                <span className="block text-lg font-semibold">{t.person}</span>
                <span className="label mt-1 block text-stone">
                  {t.role} · {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
