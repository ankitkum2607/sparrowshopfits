import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { delay, pad } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section relative z-10 bg-bone">
      <div className="shell">
        <h2 id="services-heading" data-reveal className="display mb-14 text-[clamp(2.5rem,6.4vw,7rem)] lg:mb-20">
          Built around
          <br />
          your retail needs.
        </h2>

        <ul className="border-t border-ink/15">
          {services.map((service, i) => (
            <li key={service.title} data-reveal style={delay((i % 4) * 0.05)} className="rule group border-b border-ink/15">
              <a
                href="#contact"
                className="relative grid grid-cols-[3rem_1fr_auto] items-center gap-x-4 py-6 lg:grid-cols-[6rem_1.4fr_1fr_16rem_auto] lg:py-8"
              >
                <span className="label text-stone transition-colors duration-300 group-hover:text-accent">{pad(i + 1)}</span>
                <span className="display text-[clamp(1.6rem,3.6vw,3.75rem)] transition-transform duration-500 ease-out-expo group-hover:translate-x-2">
                  {service.title}
                </span>
                <span className="col-span-2 col-start-2 row-start-2 mt-2 text-base text-ink/65 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:mt-0">
                  {service.text}
                </span>
                {/* Hover preview sits in its own column so it never covers the copy. Desktop pointers only. */}
                <span aria-hidden className="relative col-start-4 row-start-1 hidden lg:block">
                  <span className="pointer-events-none absolute left-0 top-1/2 z-10 aspect-[4/3] w-full -translate-y-1/2 scale-95 overflow-hidden opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100">
                    <Image src={service.image} alt="" fill sizes="256px" className="object-cover" />
                  </span>
                </span>
                <ArrowRight
                  size={22}
                  aria-hidden
                  className="col-start-3 row-start-1 text-ink/40 transition-[transform,color] duration-500 ease-out-expo group-hover:translate-x-2 group-hover:text-accent lg:col-start-5"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
