import Link from "next/link";
import { Brand } from "./Brand";

const navigationLinks = [
  { label: "Home", href: "#main-content" },
  { label: "About", href: "#our-story" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-paper text-ink">
      <div className="section-gutter section-padding space-y-12 xl:mx-auto xl:grid xl:max-w-[1680px] xl:grid-cols-[2.2fr_0.7fr_0.9fr_1fr] xl:gap-12 xl:space-y-0">
        <div>
          <Brand size="large" />
          <p className="mt-6 max-w-[640px] text-[1rem] leading-[1.8] text-muted">
            Dr. Maya Reynolds offers warm, collaborative therapy for adults
            navigating anxiety, panic, trauma, burnout, or perfectionism. Meet
            in person in Santa Monica or by secure telehealth in California.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-start gap-2 text-[0.95rem] leading-[1.55]"
        >
          <p className="mb-3 text-[0.9rem] uppercase tracking-[0.14em] text-forest">
            Navigate
          </p>
          {navigationLinks.map((item) => (
            <Link
              className="transition-colors hover:text-clay"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-1 text-[0.9rem] leading-[1.55]">
          <p className="mb-3 text-[0.9rem] uppercase tracking-[0.14em] text-forest">
            Contact
          </p>
          <address className="not-italic">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </address>
          <Link className="hover:text-clay" href="#office">
            In-person therapy
          </Link>
          <span>Secure California telehealth</span>
          <p className="mt-4 max-w-[560px] text-[1rem] text-muted">
            Serving Santa Monica and clients throughout California
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-[0.9rem] leading-[1.55]">
          <p className="mb-3 text-[0.9rem] uppercase tracking-[0.14em] text-forest">
            Your therapist
          </p>
          <Link className="transition-colors hover:text-clay" href="#our-story">
            Dr. Maya Reynolds, PsyD
          </Link>
        </div>
      </div>

      <div className="section-gutter bg-primary pb-10 pt-3 text-[0.85rem] text-white">
        <div>
          Dr. Maya Reynolds, PsyD | Santa Monica, CA | Website by Nitul Chandra Dutta.
        </div>
      </div>
    </footer>
  );
}
