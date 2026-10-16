import { faqs } from "../homepage-data";

export function FaqSection() {
  return (
    <section
      aria-labelledby="faqs-title"
      className="bg-paper section-gutter section-padding"
      id="faqs"
    >
      <div className="mx-auto grid max-w-[1000px] gap-9 md:grid-cols-[0.75fr_1.25fr] md:gap-16 xl:max-w-[1280px]">
        <div>
          <p className="mb-3 text-[0.9rem] uppercase tracking-[0.15em] text-forest">
            A few helpful details
          </p>
          <h2
            className="font-serif text-[clamp(2.5rem,3.8vw,3.2rem)] font-light tracking-[-0.03em]"
            id="faqs-title"
          >
            Frequently asked{" "}
            <span className="italic text-clay">questions</span>
          </h2>
        </div>

        <div>
          {faqs.map((item) => (
            <details
              className="group border-b border-line py-5 first:border-t"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-[1.45rem] marker:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-clay transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[650px] pb-1 pt-4 text-[1rem] leading-[1.85] text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
