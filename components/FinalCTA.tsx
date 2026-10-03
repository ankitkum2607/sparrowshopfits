import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/content";
import { img } from "@/lib/images";
import { delay } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section
      id="contact"
      data-cta
      aria-labelledby="cta-heading"
      className="relative z-10 flex min-h-[88vh] items-end overflow-hidden bg-ink text-white"
    >
      <div data-cta-img className="absolute inset-0 will-change-transform">
        <Image
          src={img.bluorng5}
          alt="Garments on an illuminated rail inside a dark concrete store interior"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/50" />

      <div className="shell section relative w-full">
        <h2 id="cta-heading" data-reveal className="display text-[clamp(2.75rem,9vw,10rem)]">
          Planning your
          <br />
          next retail space?
        </h2>
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p data-reveal style={delay(0.1)} className="max-w-md text-lg leading-relaxed text-white/80">
            Let&apos;s turn your retail vision into a space built to perform.
          </p>
          <div data-reveal style={delay(0.18)} className="flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}?subject=New%20retail%20project`} className="btn btn-solid">
              Start a project <ArrowRight size={16} />
            </a>
            <a href="#work" className="btn btn-ghost">
              Explore our work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
