import Image from "next/image";
import { logos } from "@/lib/images";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {logos.map((logo) => (
        <li key={logo.name} className="px-8 lg:px-12">
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.name}
            sizes="160px"
            className="h-8 w-auto opacity-55 mix-blend-multiply grayscale transition-opacity duration-300 hover:opacity-100 lg:h-9"
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientLogos() {
  return (
    <section aria-labelledby="clients-heading" className="border-b border-ink/10 bg-bone py-16 lg:py-20">
      <div className="shell mb-12 flex flex-col gap-3 lg:flex-row lg:items-baseline lg:justify-between">
        <h2 id="clients-heading" className="label max-w-md text-ink/70">
          Trusted by brands that move retail forward.
        </h2>
        <p className="label text-stone">100+ clients since 2022</p>
      </div>
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
