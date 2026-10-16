import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StorySection() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 bg-paper py-8 md:grid-cols-[1.05fr_0.95fr] md:gap-[3vw] md:py-12 xl:py-28" id="our-story" aria-labelledby="story-title">
      <div className="image-tone relative h-[clamp(420px,43vw,760px)] overflow-hidden bg-sand"><Image src="/images/dr-maya-reynolds.png" alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist" fill sizes="(max-width: 760px) 100vw, 53vw" className="object-cover object-[center_28%]" /></div>
      <div className="mx-auto max-w-[490px] px-5 py-4 md:px-8">
        <p className="mb-4 text-[0.9rem] uppercase tracking-[0.15em] text-forest">Meet your therapist</p><h2 className="font-serif text-[clamp(2.8rem,4.3vw,3.9rem)] font-light leading-[1.15] tracking-[-0.035em]" id="story-title">Dr. Maya Reynolds, <span className="italic text-clay">PsyD</span></h2>
        <p className="mt-6 max-w-[410px] text-[1rem] leading-[1.9] text-muted">Dr. Reynolds is a licensed clinical psychologist who works with adults navigating anxiety, panic, trauma, burnout, and perfectionism. She often supports high-achieving professionals, entrepreneurs, and creatives who feel exhausted, caught in overthinking, tense, or on edge.</p>
        <p className="mt-4 max-w-[410px] text-[1rem] leading-[1.9] text-muted">Her warm, collaborative approach blends practical tools with deeper reflection. She works at a pace that supports safety and stabilization, helping clients build insight, resilience, and a stronger relationship with themselves.</p>
        <Link className="mt-5 inline-flex items-center gap-2 text-[0.9rem] uppercase tracking-[0.13em] text-forest underline decoration-1 underline-offset-4 hover:gap-4" href="#approach">Read about her approach <ArrowRight aria-hidden="true" size={14} /></Link>
      </div>
    </section>
  );
}
