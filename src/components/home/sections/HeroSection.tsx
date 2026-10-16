import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="mt-0 grid grid-cols-1 items-center gap-12 overflow-hidden bg-cream section-gutter pb-14 pt-4 md:mt-14 md:grid-cols-[38%_minmax(0,1fr)] md:gap-[4%] md:px-0 md:pb-0 md:pt-0 xl:mt-0 xl:min-h-[min(78vh,750px)] xl:grid-cols-[34%_46%_8%] xl:items-stretch xl:gap-[6%] xl:pb-8">
      <div className="image-tone relative order-2 -mx-[var(--section-gutter)] h-[clamp(280px,40vw,420px)] w-[70vw] overflow-hidden md:order-1 md:mx-0 md:h-[min(70vh,620px)] md:w-auto xl:h-[min(78vh,750px)] xl:min-h-[620px]">
        <Image alt="Dr. Maya Reynolds, licensed clinical psychologist" className="object-cover object-[center_28%]" fill priority sizes="(max-width: 760px) 72vw, 34vw" src="/images/dr-maya-reynolds.png" />
      </div>
      <div className="order-1 mx-auto flex w-full max-w-[960px] flex-col justify-center px-1 md:order-2 md:mx-0 md:max-w-none md:px-[2vw] xl:justify-start xl:px-[2.3vw] xl:pt-5">
        <p className="max-w-none font-sans text-[0.9rem] font-medium [text-transform:uppercase] leading-[1.9] tracking-[0.15em] text-forest md:text-[0.9rem] xl:max-w-[510px]">Adult therapy in Santa Monica &amp; secure California telehealth</p>
        <h1 className="mt-4 max-w-[900px] font-serif text-[clamp(2.25rem,7vw,3.4rem)] font-light leading-[1.12] tracking-[-0.025em] md:mt-[7.5rem] md:text-[clamp(3rem,5vw,4rem)] xl:mt-[clamp(5.5rem,7.5vh,7.5rem)] xl:text-[clamp(3.1rem,4vw,4.5rem)] xl:leading-[1.22]" id="hero-title">
          Understand what you’re carrying and find a steadier way <span className="ml-[0.48em] inline-block whitespace-nowrap font-accent text-[0.9em] text-clay">forward</span><span className="ml-[0.04em] inline-block align-baseline font-serif text-[0.55em] leading-none text-ink">.</span>
        </h1>
        <p className="mt-6 max-w-[900px] text-[1rem] leading-[1.9] text-muted md:text-[1rem] xl:mt-14 xl:text-[1.2rem]">Warm, collaborative therapy for adults navigating anxiety, panic, trauma, burnout, or perfectionism.</p>
        <Link className="mt-10 inline-flex w-fit items-center text-base uppercase tracking-[0.14em] text-forest underline decoration-1 underline-offset-4 transition-colors hover:text-clay xl:mt-12 xl:text-[0.7rem]" href="#services">Explore therapy services</Link>
      </div>
      <div className="image-tone relative order-3 hidden h-[min(52vh,500px)] self-end overflow-hidden xl:block"><Image alt="Soft daylight in Dr. Reynolds' Santa Monica therapy office" className="object-cover" fill sizes="8vw" src="/images/maya-office-2.jpeg" /></div>
    </section>
  );
}
