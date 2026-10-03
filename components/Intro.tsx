import Image from "next/image";
import { img } from "@/lib/images";
import { delay } from "@/lib/utils";

export function Intro() {
  return (
    <section id="about" aria-labelledby="intro-heading" className="section bg-bone">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            <p data-reveal className="label mb-8 text-stone">
              What we do
            </p>
            <h2 id="intro-heading" data-reveal style={delay(0.08)} className="display text-[clamp(2.5rem,6.4vw,7rem)]">
              From first sketch
              <br />
              to final handover.
            </h2>
          </div>
          <p data-reveal style={delay(0.16)} className="mt-10 max-w-md text-lg leading-relaxed text-ink/70 lg:mt-0">
            Sparroh brings retail design, project management, fabrication and turnkey execution together under one
            integrated system.
          </p>
        </div>

        <div data-reveal="clip" className="relative aspect-[4/5] overflow-hidden bg-ink/10 lg:col-span-5 lg:col-start-8">
          <Image
            src={img.armani2}
            alt="Curved glass storefront of an Armani Exchange store"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
