"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

const SCROLL_THRESHOLD = 24;
const DESKTOP_QUERY = "(min-width: 1024px)";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.querySelectorAll("main, footer").forEach((el) => el.toggleAttribute("inert", isOpen));
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const desktop = window.matchMedia(DESKTOP_QUERY);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [isOpen]);

  const solid = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        solid ? "bg-ink/95 shadow-[0_1px_0_rgb(255_255_255/0.08)]" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="shell flex h-18 items-center justify-between gap-8">
        <a href="#top" className="text-[0.95rem] font-semibold uppercase tracking-[0.14em]">
          Sparroh <span className="font-normal text-white/60">Shopfits</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="label text-white/75 transition-colors hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="label group hidden items-center gap-2 lg:flex">
          Start a project
          <ArrowRight size={14} className="text-accent transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <button
          type="button"
          className="-mr-3 grid size-12 place-items-center lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="shell flex h-[calc(100dvh-4.5rem)] flex-col justify-between bg-ink pb-10 pt-6 lg:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <a href={item.href} onClick={() => setIsOpen(false)} className="display block py-4 text-4xl">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-solid justify-between">
            Start a project <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
