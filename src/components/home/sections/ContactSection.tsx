import Image from "next/image";
import Link from "next/link";

export function ContactSection() {
  return (
    <section
      className="overflow-hidden bg-cream pb-20 xl:grid xl:min-h-[min(92vh,1000px)] xl:grid-cols-[16.2%_minmax(0,1fr)_34.5%] xl:grid-rows-[auto_minmax(0,1fr)] xl:items-stretch xl:gap-x-[4vw] xl:gap-y-0 xl:pb-0 xl:pt-20"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="image-tone relative mt-12 aspect-[1.85] w-[49.4%] xl:col-start-1 xl:row-start-2 xl:mt-[12rem] xl:aspect-auto xl:w-full xl:self-stretch">
        <Image
          src="/images/maya-office-2.jpeg"
          alt="A comfortable seating area in Dr. Reynolds' therapy office"
          fill
          sizes="(max-width: 1279px) 50vw, 16vw"
          className="object-cover object-center"
        />
      </div>

      <div className="mt-14 px-[6vw] pt-0 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-2 xl:grid xl:grid-rows-[auto_minmax(0,1fr)] xl:self-stretch xl:px-0 xl:pt-0">
        <p className="mb-8 text-[0.9rem] uppercase tracking-[0.15em] text-forest xl:mb-[8rem]">
          In-person in Santa Monica &amp; secure California telehealth
        </p>
        <div className="xl:row-start-2 xl:flex xl:flex-col">
          <h2
            className="max-w-[900px] font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-[1.12] tracking-[-0.025em] text-ink xl:max-w-[700px] xl:text-[clamp(3rem,3.3vw,3.9rem)] xl:leading-[1.12]"
            id="contact-title"
          >
            <span className="inline-block whitespace-nowrap font-accent text-[0.82em] leading-[0.7] text-clay">
              Dr. Reynolds
            </span>{" "}
            may be a good fit.
          </h2>
          <p className="mt-16 text-[1rem] leading-[1.8] text-muted xl:mt-7 xl:text-[1.1rem] xl:leading-[1.9]">
            Dr. Reynolds works with adults navigating anxiety, panic, trauma,
            burnout, or perfectionism. If you are high-achieving yet exhausted,
            caught in overthinking, or feeling on edge, therapy can offer space
            to understand what is contributing and build practical ways forward.
          </p>
          <p className="mt-4 text-[1rem] leading-[1.8] text-muted xl:text-[1.1rem] xl:leading-[1.9]">
            Sessions are available in person in Santa Monica and by secure
            telehealth for clients located in California.
          </p>
          <p className="mt-4 text-[1rem] leading-[1.8] text-muted xl:text-[1.1rem] xl:leading-[1.9]">
            The office is quiet and private, with natural light and a comfortable,
            uncluttered setting. Explore the office and session options.
          </p>
          <Link
            className="mt-14 inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-[50%] border border-primary px-7 py-3 text-[0.9rem] uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-paper xl:mt-14 xl:h-[52px] xl:w-[160px] xl:min-h-0 xl:self-start xl:px-0 xl:py-0 xl:text-[0.8rem]"
            href="#office"
          >
            BOOK A SESSION
          </Link>
        </div>
      </div>

      <div className="image-tone relative ml-auto mt-9 aspect-[2.35] w-[81vw] xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:ml-0 xl:mt-0 xl:aspect-auto xl:w-full xl:self-stretch">
        <Image
          src="/images/maya-office-1.jpeg"
          alt="The other view of Dr. Reynolds' Santa Monica office"
          fill
          sizes="(max-width: 1279px) 81vw, 34.5vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
