const categories = [
  {
    title: "Areas of focus",
    topics: ["Anxiety", "Panic", "Trauma", "Burnout", "Perfectionism"],
  },
  {
    title: "Therapy methods",
    topics: [
      "Cognitive-behavioral therapy (CBT)",
      "EMDR",
      "Mindfulness-based practices",
      "Body-oriented techniques",
    ],
  },
];

export function ExpertiseSection() {
  return (
    <section className="bg-paper section-gutter section-padding xl:min-h-[81vh]" id="specialties" aria-labelledby="expertise-title">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-9 md:grid-cols-[0.8fr_1fr_1fr] md:gap-10">
        <div><h2 className="max-w-[220px] font-serif text-[clamp(1.3rem,2vw,1.65rem)] font-light leading-[1.3] tracking-[-0.03em] md:max-w-[320px] md:text-[clamp(2rem,3.2vw,3.5rem)]" id="expertise-title">Her areas of <span className="font-accent text-[1.12em] text-clay">expertise</span></h2></div>
        {categories.map((category) => <div className="flex flex-col" key={category.title}><h3 className="mb-3 text-[0.8rem] uppercase tracking-[0.14em] text-muted">{category.title}</h3>{category.topics.map((topic) => <span className="flex min-h-[68px] items-center border-b border-line py-3 text-[0.9rem] uppercase tracking-[0.1em] text-forest" key={topic}>{topic}</span>)}</div>)}
      </div>
    </section>
  );
}
