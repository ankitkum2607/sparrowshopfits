import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { img } from "@/lib/images";

export function Hero() {
  return (
    <section className="sticky top-[min(0px,calc(100svh-38rem))] h-svh min-h-[38rem] overflow-hidden bg-ink text-white">
      <div className="hero-img absolute inset-0">
        <div data-hero-img className="absolute inset-0 [transform:scale(1.05)] will-change-transform">
          <Image
            src={img.bluorng3}
            alt="Bluorng store interior with a concrete portal framing illuminated garment rails"
            fill
            preload
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-ink/55" />
      <div data-hero-shade className="absolute inset-0 bg-ink opacity-0" />

      <div data-hero-copy className="shell relative flex h-full flex-col justify-end pb-[clamp(2.5rem,8vh,6rem)]">
        <p className="label hero-rise mb-6 flex items-center gap-3 text-white/80">
          <span className="h-px w-8 bg-accent" />
          Retail Design · Build · Execution
        </p>
        <h1 className="display text-[clamp(2.6rem,8.4vw,9.5rem)]">
          <span className="hero-line">
            <span>We build the spaces</span>
          </span>
          <span className="hero-line">
            <span>where brands grow.</span>
          </span>
        </h1>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="hero-rise max-w-xl text-lg leading-relaxed text-white/80 [animation-delay:0.25s]">
            From retail design and fabrication to turnkey execution, Sparroh transforms retail concepts into
            high-performing physical spaces.
          </p>
          <div className="hero-rise flex flex-wrap gap-3 [animation-delay:0.4s]">
            <a href="#work" className="btn btn-solid">
              Explore our work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
