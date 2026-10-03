import Image from "next/image";
import { industries } from "@/lib/content";
import { delay, pad } from "@/lib/utils";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="section relative isolate z-10 overflow-hidden bg-ink text-white"
    >
      <div className="shell">
        <p data-reveal className="label mb-8 text-white/50">
          Industries
        </p>
        <h2 id="industries-heading" data-reveal style={delay(0.08)} className="display mb-14 text-[clamp(2rem,4vw,4rem)] text-white/70 lg:mb-20">
          Built for
          <br />
          different retail worlds.
        </h2>

        <ul className="grid sm:grid-cols-2 sm:gap-x-12">
          {industries.map((industry, i) => (
            // The image is positioned against the section, so hovering a name washes the whole backdrop.
            <li key={industry.name} data-reveal style={delay((i % 4) * 0.05)} className="group">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-30"
              >
                <Image src={industry.image} alt="" fill sizes="(min-width: 640px) 100vw, 1px" className="object-cover" />
              </span>
              <span className="flex items-baseline gap-5 border-b border-white/15 py-5 transition-colors duration-500 group-hover:border-accent lg:py-6">
                <span className="label text-white/60 transition-colors duration-300 group-hover:text-accent">
                  {pad(i + 1)}
                </span>
                <span className="display text-[clamp(2rem,5vw,5.25rem)] text-white/55 transition-[color,transform] duration-500 ease-out-expo group-hover:translate-x-2 group-hover:text-white">
                  {industry.name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
