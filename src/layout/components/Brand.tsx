import Link from "next/link";

export function Brand({
  inverse = false,
  size = "normal",
}: {
  inverse?: boolean;
  size?: "normal" | "large";
}) {
  return (
    <Link aria-label="Dr. Maya Reynolds home" className={`inline-flex shrink-0 flex-col ${size === "large" ? "max-[320px]:max-w-full" : "max-[320px]:max-w-[calc(100vw_-_5.25rem)]"}`} href="/">
      <span className={`${size === "large" ? "text-[clamp(2.5rem,4.5vw,4.25rem)] max-[320px]:text-[2rem]" : "text-[clamp(1.85rem,4.5vw,3.1rem)] max-[320px]:text-[1.45rem]"} font-serif leading-[0.95] tracking-[-0.045em] ${inverse ? "text-paper" : "text-ink"}`}>
        Maya Reynolds, <span className={`italic ${inverse ? "text-accent-soft" : "text-clay"}`}>PsyD</span>
      </span>
      <span className={`${size === "large" ? "mt-3 text-[clamp(0.68rem,1.02vw,0.82rem)] tracking-[clamp(0.14em,0.34vw,0.34em)] max-[320px]:text-[0.5rem] max-[320px]:tracking-[0.14em] xl:text-[0.82rem] xl:tracking-[0.34em]" : "mt-2 text-[clamp(0.66rem,1.4vw,0.85rem)] tracking-[0.32em] max-[320px]:text-[0.5rem] max-[320px]:tracking-[0.14em]"} pl-1 uppercase ${inverse ? "text-accent-soft" : "text-clay"}`}>
        Psychotherapy <span aria-hidden="true">&middot;</span> Santa Monica
      </span>
    </Link>
  );
}
