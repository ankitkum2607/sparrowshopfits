"use client";

import { useState } from "react";
import Image from "next/image";
import { processSteps } from "@/lib/content";
import { pad } from "@/lib/utils";

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="process-heading" className="section bg-paper">
      <div className="shell">
        <h2 id="process-heading" data-reveal className="display mb-14 text-[clamp(2.5rem,6.4vw,7rem)] lg:mb-20">
          One system.
          <br />
          Every stage.
        </h2>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <ol className="border-t border-ink/15 lg:col-span-7">
            {processSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.title} className="rule border-b border-ink/15" data-active={isActive}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`grid w-full grid-cols-[3.5rem_1fr] items-baseline gap-x-4 py-7 text-left transition-opacity duration-500 lg:grid-cols-[6rem_1fr_1fr] lg:py-9 ${
                      isActive ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <span
                      className={`label transition-transform duration-500 ease-out-expo ${
                        isActive ? "translate-x-3 text-accent" : ""
                      }`}
                    >
                      {pad(i + 1)}
                    </span>
                    <span className="display text-[clamp(2.25rem,5vw,5rem)]">{step.title}</span>
                    <span className="col-start-2 mt-3 max-w-sm text-base leading-relaxed text-ink/75 lg:col-start-3 lg:mt-0">
                      {step.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div
            data-reveal="clip"
            className="relative order-first aspect-[4/3] overflow-hidden bg-ink/10 lg:order-none lg:col-span-4 lg:col-start-9 lg:aspect-auto"
          >
            {processSteps.map((step, i) => (
              <Image
                key={step.title}
                src={step.image}
                alt={step.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                placeholder="blur"
                aria-hidden={i !== active}
                className={`object-cover transition-[opacity,transform] duration-700 ease-out-expo ${
                  i === active ? "opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
