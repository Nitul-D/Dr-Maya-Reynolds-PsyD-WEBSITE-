import Image from "next/image";

export function StoryBridgeSection() {
  return (
    <section className="bg-paper section-gutter pb-8 pr-0 pt-[3.25rem] md:pb-12 xl:grid xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:items-end xl:gap-[3vw] xl:pb-24 xl:pl-0 xl:pt-20" aria-label="A steadier way forward">
      <div className="image-tone relative aspect-[2.32] w-full overflow-hidden bg-sand xl:aspect-[1.45]">
        <Image
          alt="A family spending time together at the beach"
          className="scale-[1.25] object-cover object-[center_82%] saturate-[0.72] brightness-[0.9] sepia-[0.12]"
          fill
          sizes="(max-width: 1279px) 88vw, 56vw"
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1800&q=85"
        />
      </div>
      <p className="mt-2 font-serif text-[clamp(1.55rem,1.8vw,1.8rem)] font-light leading-[1.5] tracking-[-0.02em] text-ink xl:mt-0 xl:px-8 xl:pb-4 xl:text-[clamp(2.5rem,3.5vw,4rem)] xl:leading-[1.2]">
        Understanding your experiences <span className="font-accent text-[1.15em] text-clay">&amp;</span> finding a steadier way forward.
      </p>
    </section>
  );
}
