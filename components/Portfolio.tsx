import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { delay, pad } from "@/lib/utils";

export function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-heading" className="bg-ink text-white">
      <div className="shell section pb-[clamp(3rem,6vw,6rem)]">
        <p data-reveal className="label mb-8 text-white/50">
          Selected work
        </p>
        <h2 id="work-heading" data-reveal style={delay(0.08)} className="display text-[clamp(2.5rem,6.4vw,7rem)]">
          Spaces built for
          <br />
          real-world retail.
        </h2>
      </div>

      {/* Desktop: each project sticks and the next slides over it. Mobile: plain vertical stack. */}
      <div>
        {projects.map((project, i) => (
          <article
            key={project.name}
            data-project
            className="relative h-[78vh] min-h-[30rem] overflow-hidden bg-ink md:sticky md:top-[min(0px,calc(88vh-30rem))] md:h-[88vh]"
          >
            <div data-reveal="clip" className="absolute inset-0">
              <div data-project-img className="absolute inset-0 md:will-change-transform">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/15 to-ink/30" />

            <div className="shell absolute inset-x-0 bottom-0 pb-8 lg:pb-12">
              <p className="label mb-4 text-white/70">
                {pad(i + 1)} / {pad(projects.length)}
              </p>
              <div className="overflow-hidden">
                <h3 data-project-title className="display text-[clamp(3rem,10vw,11rem)]">
                  {project.name}
                </h3>
              </div>
              <div
                data-reveal
                style={delay(0.2)}
                className="mt-6 flex flex-col gap-4 border-t border-white/25 pt-5 md:flex-row md:items-center md:justify-between"
              >
                <p className="label">
                  {project.industry} · {project.location}
                </p>
                <p className="label text-white/70">{project.services.join(" / ")}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label group inline-flex min-h-11 items-center gap-2"
                >
                  View project
                  <span className="sr-only">: {project.name}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            <div data-project-shade aria-hidden className="pointer-events-none absolute inset-0 bg-ink opacity-0" />
          </article>
        ))}
      </div>
    </section>
  );
}
