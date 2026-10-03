import Image from "next/image";
import { img } from "@/lib/images";
import { FloorPlan } from "./FloorPlan";

/**
 * Scroll-scrubbed wipe from drawing to finished store. ScrollFx animates --p
 * (1 → 0) on [data-plan]; without JS or with reduced motion it rests at a 50/50 split.
 */
export function PlanReality() {
  return (
    <section aria-labelledby="plan-heading" className="relative z-10 bg-bone">
      <div data-plan-track className="h-[220vh]">
        <div className="sticky top-0 flex h-svh flex-col pb-6 pt-22 lg:pb-10">
          <div className="shell mb-5 flex w-full items-end justify-between gap-6">
            <h2 id="plan-heading" className="display text-[clamp(1.75rem,4.2vw,4.5rem)]">
              Plan <span className="text-accent">→</span> Reality
            </h2>
            <p className="label hidden text-stone sm:block">Scroll to build</p>
          </div>

          <div className="shell w-full flex-1">
            <div data-plan className="relative h-full overflow-hidden bg-ink">
              <div data-plan-photo className="absolute inset-0 will-change-transform">
                <Image
                  src={img.armani1}
                  alt="Finished Armani Exchange store interior with display tables and timber slat walls"
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="plan-layer absolute inset-0 bg-paper p-3 text-ink lg:p-8">
                <FloorPlan id="plan" className="size-full" />
              </div>
              <div aria-hidden className="plan-divider absolute inset-y-0 w-0.5 -translate-x-1/2 bg-accent" />
              <p className="label absolute left-4 top-4 bg-ink px-2 py-1 text-white">Drawing</p>
              <p className="label absolute bottom-4 right-4 bg-accent px-2 py-1 text-white">Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
