"use client";

import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "./Brand";

const navigationLinks = [
  { label: "About", href: "#our-story" },
  { label: "Client focus", href: "#who-we-help" },
  { label: "Focus areas", href: "#specialties" },
  { label: "Approach", href: "#approach" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 bg-cream">
      <Link
        className="absolute left-4 top-2 -translate-y-[150%] bg-forest px-4 py-2 text-white focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </Link>
      <div className="flex min-h-[104px] items-center justify-between gap-2 px-[clamp(1rem,5vw,2rem)] sm:gap-6 xl:min-h-[158px] xl:-translate-y-4 xl:pl-[6vw] xl:pr-[5vw]">
        <Brand />
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid size-11 shrink-0 place-items-center xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={25} strokeWidth={1} /> : <Menu size={31} strokeWidth={1} />}
        </button>
        <nav
          aria-label="Main navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100vh-104px)] min-h-[calc(100vh-104px)] flex-col overflow-y-auto border-t border-line bg-cream px-[10vw] pb-8 pt-5 xl:static xl:flex xl:min-h-0 xl:max-h-none xl:flex-row xl:flex-wrap xl:items-center xl:justify-end xl:gap-[clamp(1rem,2.2vw,2.6rem)] xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0`}
          id="primary-navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
        >
          {navigationLinks.map((item) => (
            <Link
              className={`${item.label === "Contact" ? "flex min-h-[7.5rem] items-center justify-start whitespace-nowrap py-4 text-[clamp(1.5rem,7vw,3rem)] leading-none tracking-[0.04em] xl:ml-0 xl:mt-0 xl:h-[54px] xl:w-[124px] xl:min-h-0 xl:min-w-0 xl:justify-center xl:rounded-[50%] xl:border xl:border-ink xl:px-0 xl:py-0 xl:text-[0.85rem] xl:tracking-[0.12em]" : "flex min-h-[7.5rem] items-center justify-start whitespace-nowrap py-4 text-[clamp(1.5rem,7vw,3rem)] leading-none tracking-[0.04em] xl:min-h-0 xl:py-2 xl:text-[0.85rem] xl:tracking-[0.12em]"} uppercase text-ink transition-colors hover:text-clay`}
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ChevronRight aria-hidden="true" className="ml-4 shrink-0 xl:hidden" size={44} strokeWidth={1} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
