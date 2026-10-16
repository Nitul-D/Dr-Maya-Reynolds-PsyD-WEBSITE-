import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WelcomeSection() {
  return (
    <section
      className="grid min-h-[640px] grid-cols-1 items-center gap-12 overflow-hidden bg-sand pb-16 pt-10 md:min-h-[min(84vh,860px)] md:gap-16 md:pb-8 md:pt-28 xl:min-h-[min(100vh,1076px)] xl:grid-cols-[minmax(0,1fr)_minmax(360px,30vw)] xl:items-start xl:gap-[5vw] xl:pb-20 xl:pt-0"
      id="welcome"
      aria-labelledby="welcome-title"
    >
      <div className="mx-auto w-full section-gutter xl:translate-y-0 xl:py-0 xl:pl-[8.6vw] xl:pr-0 xl:pt-[clamp(12rem,29.3vh,19rem)]">
        <p className="mb-5 hidden text-[0.9rem] uppercase tracking-[0.16em] text-forest md:block xl:hidden">
          A place to pause and begin
        </p>
        <h2
          className="max-w-[900px] font-serif text-[clamp(2rem,5vw,3rem)] font-light leading-[1.18] tracking-[-0.03em] md:text-[clamp(3rem,5vw,4rem)] xl:text-[clamp(3rem,3vw,3.6rem)]"
          id="welcome-title"
        >
          You may be holding it together while feeling exhausted inside.
        </h2>
        <div className="mt-[clamp(3rem,7vw,6rem)] max-w-[1050px] text-[1rem] leading-[1.9] text-muted sm:text-[1.0625rem] xl:mt-[clamp(4.75rem,8vh,5rem)] xl:grid xl:grid-cols-2 xl:gap-x-10 xl:text-[1.05rem] xl:leading-[1.7]">
          <div className="xl:col-start-1 xl:row-start-1">
            <p className="mb-3 font-sans text-[0.9rem] font-medium [text-transform:uppercase] leading-[1.8] tracking-[0.12em] text-ink xl:mb-5 xl:text-[0.9rem]">
              Warm, collaborative therapy for adults in Santa Monica
            </p>
            <p>
              Dr. Reynolds works with adults&mdash;including high-achieving
              professionals, entrepreneurs, and creatives&mdash;who are navigating
              anxiety, panic, trauma, burnout, or perfectionism. You may feel
              exhausted, caught in overthinking, tense, or on edge.
            </p>
          </div>
          <div className="image-tone relative my-10 aspect-[2.9] w-full max-w-[1200px] overflow-hidden bg-cream xl:hidden">
            <Image
              alt="A comfortable, light-filled view of Dr. Reynolds' therapy office"
              className="object-cover object-[center_55%]"
              fill
              sizes="(max-width: 1023px) 88vw, 82vw"
              src="/images/maya-office-2.jpeg"
            />
          </div>
          <p className="mt-4 xl:col-start-2 xl:row-start-1 xl:mt-0">
            Therapy offers room to explore how past experiences and current
            stress shape the way you feel. Together, you can build insight,
            practical tools for difficult moments, resilience, and a stronger
            relationship with yourself.
          </p>
          <Link
            className="mt-12 inline-flex w-fit items-center gap-2 text-[0.9rem] uppercase tracking-[0.12em] text-forest underline decoration-1 underline-offset-4 hover:gap-4 xl:col-span-2 xl:row-start-2 xl:mt-14"
            href="#approach"
          >
            Explore Dr. Reynolds’ approach <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </div>
      <div className="image-tone relative mt-[clamp(5rem,12vh,8rem)] hidden min-h-[min(82vh,800px)] overflow-hidden bg-cream xl:col-start-2 xl:row-start-1 xl:block">
        <Image
          alt="A calm, sunlit view of Dr. Reynolds' therapy office"
          className="object-cover object-center"
          fill
          sizes="(min-width: 1280px) 31vw, 100vw"
          src="/images/maya-office-1.jpeg"
        />
      </div>
    </section>
  );
}
