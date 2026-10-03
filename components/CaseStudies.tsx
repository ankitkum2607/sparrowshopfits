import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { delay } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section aria-labelledby="cases-heading" className="section relative z-10 bg-paper">
      <div className="shell">
        <p data-reveal className="label mb-8 text-stone">
          Case studies
        </p>
        <h2 id="cases-heading" data-reveal style={delay(0.08)} className="display mb-16 text-[clamp(2.5rem,6.4vw,7rem)] lg:mb-24">
          Delivered,
          <br />
          on the record.
        </h2>

        <div className="space-y-20 lg:space-y-32">
          {caseStudies.map((study, i) => {
            const rows = [
              ["Project", study.project],
              ["Location", study.location],
              ["Scope", study.scope],
              ["Result", study.result],
            ];
            const isFlipped = i % 2 === 1;
            return (
              <article key={study.client} className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
                <div
                  data-reveal="clip"
                  className={`relative aspect-[4/3] overflow-hidden bg-ink/10 lg:col-span-7 ${isFlipped ? "lg:order-last lg:col-start-6" : ""}`}
                >
                  <Image
                    src={study.image}
                    alt={study.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>

                <div data-reveal style={delay(0.12)} className={`lg:col-span-4 ${isFlipped ? "lg:col-start-1" : "lg:col-start-9"}`}>
                  <p className="label mb-3 text-stone">Client</p>
                  <h3 className="display text-[clamp(2.5rem,5vw,5rem)]">{study.client}</h3>
                  <dl className="mt-8 border-t border-ink/15">
                    {rows.map(([term, value]) => (
                      <div key={term} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-ink/15 py-3.5">
                        <dt className="label pt-1 text-stone">{term}</dt>
                        <dd className="text-base leading-snug text-ink/85">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={study.href} target="_blank" rel="noopener noreferrer" className="label group mt-8 inline-flex min-h-11 items-center gap-2">
                    View project
                    <span className="sr-only">: {study.client}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
