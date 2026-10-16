import Image from "next/image";
import Link from "next/link";

export function ApproachSection() {
  return (
    <section
      aria-labelledby="approach-title"
      className="grid grid-cols-1 bg-secondary lg:min-h-[100vh] lg:grid-cols-[minmax(0,1fr)_22.8%] lg:grid-rows-[auto_1fr]"
      id="approach"
    >
      <div className="section-gutter pb-16 pt-16 sm:pb-[4.5rem] sm:pt-[5.5rem] lg:col-start-1 lg:row-start-1 lg:pb-0 lg:pt-[8rem]">
        <p className="mb-5 text-[0.9rem] uppercase tracking-[0.16em] text-forest sm:mb-16 lg:mb-[9rem]">
          A collaborative approach
        </p>
        <h2
          className="max-w-[900px] font-serif text-[clamp(1.45rem,2vw,1.75rem)] font-light leading-[1.3] tracking-[-0.03em] text-ink lg:max-w-[1100px] lg:text-[clamp(2.65rem,3vw,3.55rem)] lg:leading-[1.15]"
          id="approach-title"
        >
          A thoughtful blend of structure, reflection, and care.
        </h2>
      </div>

        <div className="image-tone relative mx-5 aspect-[2.45] overflow-hidden sm:mx-[6.25vw] lg:relative lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:my-0 lg:h-[80vh] lg:self-center lg:aspect-auto">
        <Image
          alt="A comfortable armchair and natural light in the office"
          className="object-cover"
          fill
          sizes="(max-width: 1023px) 100vw, 22vw"
          src="/images/maya-office-1.jpeg"
        />
      </div>

      <div className="mx-auto w-full section-gutter pb-20 pt-10 text-[0.95rem] leading-[1.8] text-ink sm:pt-[8rem] lg:col-start-1 lg:row-start-2 lg:pb-16 lg:pt-[4rem]">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-[3vw]">
          <div>
            <p className="mb-6 max-w-[600px] font-sans text-[1rem] font-light [text-transform:uppercase] leading-[1.8] tracking-[0.12em] text-muted">
              Therapy is collaborative and paced with care, with room for reflection, depth, and safety.
            </p>
            <p className="max-w-[600px]">
              Sessions offer structure while leaving room to reflect and explore
              what matters to you. Trauma work moves at a pace that supports
              safety, stabilization, and regulation, whether you are working
              through a single event or experiences connected to childhood,
              relationships, or chronic stress.
            </p>
          </div>
          <p className="max-w-[600px]">
            Dr. Reynolds draws on cognitive-behavioral therapy (CBT), EMDR,
            mindfulness-based practices, and body-oriented techniques. She
            blends practical tools with depth-oriented work, adapting the
            process collaboratively to what you need and hope to understand.
          </p>
          <Link
            className="mt-2 inline-flex w-fit text-[0.8rem] uppercase tracking-[0.13em] text-ink underline decoration-1 underline-offset-4 lg:col-span-2 lg:mt-[8rem]"
            href="#services"
          >
            Explore areas of focus
          </Link>
        </div>
      </div>
    </section>
  );
}
