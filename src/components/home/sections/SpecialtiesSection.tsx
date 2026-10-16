import Link from "next/link";
import { services } from "../homepage-data";

export function SpecialtiesSection() {
  return (
    <section
      className="bg-paper section-gutter section-padding"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-[1500px] xl:grid xl:grid-cols-[1.08fr_1fr_1fr] xl:gap-x-[4vw]">
        <h2
          className="mb-20 font-serif text-[1.35rem] font-normal leading-tight text-ink md:mb-24 xl:mb-0 xl:text-[clamp(2rem,2.5vw,3rem)]"
          id="services-title"
        >
          Her <span className="font-accent text-clay">specialties</span> include...
        </h2>

        <div className="space-y-16 md:space-y-20 xl:col-span-2 xl:grid xl:grid-cols-2 xl:gap-x-[8vw] xl:gap-y-32 xl:space-y-0 xl:translate-y-2">
          {services.map((item) => (
            <article key={item.number}>
              <h3 className="mb-6 font-serif text-[1.1rem] font-normal leading-snug text-ink xl:mb-8 xl:text-[1.6rem]">
                {item.title}
              </h3>
              <p className="min-h-[4.5rem] max-w-[900px] text-[1rem] leading-[1.8] text-muted xl:min-h-[11rem]">
                {item.description}
              </p>
              <Link
                className="mt-24 inline-flex text-[0.9rem] uppercase tracking-[0.12em] text-muted underline decoration-1 underline-offset-4 transition-colors hover:text-clay md:mt-40 xl:mt-12"
                href="#contact"
              >
                Explore this focus
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
