import { timeline } from "@/lib/content";
import { delay, pad } from "@/lib/utils";

export function Timeline() {
  return (
    <section aria-labelledby="timeline-heading" className="section bg-ink text-white">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 id="timeline-heading" data-reveal className="display text-[clamp(2rem,4vw,4rem)] text-white/70 lg:col-span-4">
            From design
            <br />
            to handover.
          </h2>
          <p
            data-reveal
            style={delay(0.1)}
            className="display text-[clamp(5rem,19vw,20rem)] leading-[0.8] lg:col-span-8 lg:text-right"
          >
            60 <span className="text-accent">Days</span>
            <sup className="align-super text-[0.25em] text-white/60">*</sup>
          </p>
        </div>

        <ol data-timeline className="relative mt-20 grid gap-9 pl-8 lg:mt-28 lg:grid-cols-6 lg:gap-0 lg:pl-0 lg:pt-10">
          <li aria-hidden className="absolute left-0 top-0 h-full w-px bg-white/15 lg:h-px lg:w-full" />
          <li aria-hidden className="timeline-line absolute left-0 top-0 h-full w-px bg-accent lg:h-px lg:w-full" />
          {timeline.map((step, i) => (
            <li key={step} data-reveal style={delay(i * 0.08)} className="relative lg:pr-6">
              <span
                aria-hidden
                className="absolute -left-8 top-1.5 size-2 -translate-x-[3.5px] rounded-full bg-white lg:-top-10 lg:left-0 lg:-translate-y-[3.5px] lg:translate-x-0"
              />
              <span className="label block text-white/50">
                {i > 0 && <span className="mr-2 text-accent">→</span>}
                {pad(i + 1)}
              </span>
              <span className="display mt-2 block text-2xl lg:text-[clamp(1.25rem,1.9vw,2rem)]">{step}</span>
            </li>
          ))}
        </ol>

        <p className="label mt-16 max-w-xl leading-relaxed text-white/50 normal-case tracking-[0.04em]">
          *Timeline varies depending on project scope, approvals and site conditions.
        </p>
      </div>
    </section>
  );
}
