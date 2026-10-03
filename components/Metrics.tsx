import { metrics } from "@/lib/content";
import { delay } from "@/lib/utils";

export function Metrics() {
  return (
    <section aria-labelledby="metrics-heading" className="section relative z-10 bg-bone">
      <div className="shell">
        <h2 id="metrics-heading" data-reveal className="label mb-12 text-stone">
          Sparroh in numbers
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {metrics.map((metric, i) => (
            <div key={metric.label} className="flex flex-col-reverse border-t border-ink/20 pt-6">
              <dt data-reveal style={delay(i * 0.08 + 0.1)} className="label mt-4 max-w-[16rem] leading-relaxed text-ink/65">
                {metric.label}
              </dt>
              <dd className="display text-[clamp(3.25rem,9vw,9.5rem)] tabular-nums">
                {/* ScrollFx counts this up from zero when it enters the viewport. */}
                <span data-reveal data-count={metric.value} style={delay(i * 0.08)} className="inline-block">
                  {metric.value.toLocaleString("en-US")}
                </span>
                <span className="text-accent">{metric.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
