import Image from "next/image";
import { concerns } from "../homepage-data";

export function WhoWeHelpSection() {
  return (
    <section className="bg-paper section-gutter section-padding xl:min-h-[116vh]" id="who-we-help" aria-labelledby="who-title">
      <div className="mx-auto mb-12 max-w-[1500px] md:mb-[3.75rem] xl:mb-16"><h2 className="font-serif text-[clamp(1.8rem,2.2vw,2.1rem)] font-light tracking-[-0.03em] xl:text-[clamp(2.5rem,3.3vw,4rem)]" id="who-title">Who Dr. Reynolds <span className="ml-[0.15em] font-accent text-[1.12em] text-clay">works with</span></h2></div>
      <div className="mx-auto max-w-[1500px] space-y-16 xl:ml-[10.5vw] xl:mr-0 xl:grid xl:grid-cols-3 xl:gap-x-6 xl:space-y-0">
        {concerns.map((item) => <article className="group min-w-0" key={item.title}><div className="image-tone relative aspect-[2.17] overflow-hidden bg-sand xl:aspect-[0.88]"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 1279px) 90vw, 32vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div><div className="pt-10"><h3 className="mb-5 font-serif text-[1.2rem] font-normal tracking-[-0.02em] xl:text-[1.65rem]">{item.title}</h3><p className="m-0 max-w-[1100px] text-[1rem] leading-[1.9] text-muted">{item.body}</p></div></article>)}
      </div>
    </section>
  );
}
