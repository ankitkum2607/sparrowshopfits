import { techFlow } from "@/lib/content";
import { delay, pad } from "@/lib/utils";
import { FloorPlan } from "./FloorPlan";

export function Technology() {
  return (
    <section id="technology" aria-labelledby="tech-heading" className="section relative z-10 bg-coal text-white">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p data-reveal className="label mb-8 text-white/50">
            Technology
          </p>
          <h2 id="tech-heading" data-reveal style={delay(0.08)} className="display text-[clamp(2.5rem,5.4vw,6rem)]">
            Designing retail
            <br />
            with intelligence.
          </h2>
          <p data-reveal style={delay(0.16)} className="mt-8 max-w-md text-lg leading-relaxed text-white/65">
            Site data captured on a mobile app feeds AI-driven layout generation, so planning decisions are made on
            measurements rather than assumptions.
          </p>

          <ol data-reveal className="mt-12">
            {techFlow.map((step, i) => (
              <li key={step} className="flex items-end gap-5">
                <svg width="12" height="52" viewBox="0 0 12 52" fill="none" aria-hidden className="shrink-0">
                  {i > 0 && (
                    <path
                      d="M6 0V38"
                      stroke="var(--color-accent)"
                      pathLength={1}
                      className="draw"
                      style={delay(0.2 + i * 0.18)}
                    />
                  )}
                  <circle cx="6" cy="44" r="3.5" fill={i === techFlow.length - 1 ? "var(--color-accent)" : "currentColor"} />
                </svg>
                <span className="flex items-baseline gap-4 pb-0.5">
                  <span className="label text-white/60">{pad(i + 1)}</span>
                  <span className="display text-xl lg:text-2xl">{step}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <figure data-reveal style={delay(0.1)} className="relative self-center border border-white/15 p-4 lg:col-span-7 lg:p-8">
          <FloorPlan id="tech" showFlow className="h-auto w-full text-white/85" />
          <figcaption className="label mt-4 flex flex-wrap justify-between gap-2 text-white/60">
            <span>Customer flow · illustrative layout</span>
            <span className="flex items-center gap-2">
              <span className="pulse size-1.5 rounded-full bg-accent" /> Dwell hotspots
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
