import Image from "next/image";

export function ReassuranceSection() {
  return (
    <section className="relative flex min-h-[510px] items-center overflow-hidden xl:min-h-[min(88vh,780px)] xl:items-end xl:pb-[16vh]" aria-label="A note of reassurance">
      <Image alt="Gentle waves rolling toward the shore" className="object-cover object-[center_58%]" fill sizes="100vw" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=85" />
      <div className="absolute inset-0 bg-primary/55" />
      <div className="relative z-10 w-full section-gutter">
        <p className="max-w-[1120px] font-serif text-[clamp(2rem,3.2vw,3.5rem)] font-light leading-[1.35] tracking-[-0.02em] text-paper">
          You don’t have to make sense of everything alone. <em className="font-light">Therapy can offer room to understand what you’re carrying and move toward a steadier way forward.</em>
        </p>
      </div>
    </section>
  );
}
