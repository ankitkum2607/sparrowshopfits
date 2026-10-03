import { contact, nav } from "@/lib/content";

const footerNav = [...nav, { label: "Contact", href: "#contact" }];
const linkClass = "inline-flex min-h-9 items-center text-white/70 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="relative z-10 bg-ink text-white">
      <div className="shell border-t border-white/10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="display text-[clamp(2rem,4vw,3.75rem)]">
              Sparroh
              <br />
              <span className="text-white/60">Shopfits</span>
            </p>
            <p className="label mt-6 text-white/60">Simplifying retail store fit-out</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="label mb-4 text-white/60">Explore</h2>
            <ul>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="label mb-4 text-white/60">Follow</h2>
            <ul>
              {contact.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="label mb-4 text-white/60">Contact</h2>
            <address className="not-italic">
            <a href={`mailto:${contact.email}`} className={linkClass}>
              {contact.email}
            </a>
            <br />
            <a href={`tel:${contact.tel}`} className={linkClass}>
              {contact.phone}
            </a>
            <p className="mt-3 leading-relaxed text-white/55">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            </address>
          </div>
        </div>

        <div className="label mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Sparroh Shopfits. All rights reserved.</p>
          <p>Design prototype · Not for production</p>
        </div>
      </div>
    </footer>
  );
}
