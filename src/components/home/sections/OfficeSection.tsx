import Image from "next/image";

const officePhotos = [
  {
    src: "/images/maya-office-1.jpeg",
    alt: "Sunlit seating area in Dr. Reynolds’ Santa Monica office",
  },
  {
    src: "/images/maya-office-2.jpeg",
    alt: "A comfortable, uncluttered counseling office",
  },
];

export function OfficeSection() {
  return (
    <section
      aria-labelledby="office-title"
      className="bg-sand section-gutter section-padding xl:mt-20"
      id="office"
    >
      <div className="mx-auto grid max-w-[1060px] items-center gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16 xl:max-w-[1280px]">
        <div>
          <p className="mb-3 text-[0.9rem] uppercase tracking-[0.15em] text-forest">
            Office &amp; session options
          </p>
          <h2
            className="font-serif text-[clamp(2.6rem,4.2vw,3.7rem)] font-light leading-[1.15] tracking-[-0.03em]"
            id="office-title"
          >
            A quiet, light-filled office
          </h2>
          <p className="mt-6 text-[1rem] leading-[1.9] text-muted">
            Dr. Reynolds’ Santa Monica office has natural light and a comfortable,
            uncluttered setting. In-person therapy is available here, with secure
            telehealth for clients located in California.
          </p>
          <address className="mt-5 text-[0.9rem] leading-[1.8] text-forest not-italic">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </address>
        </div>

        <div className="grid grid-cols-2 items-start gap-3">
          {officePhotos.map((photo, index) => (
            <div
              className={`image-tone relative aspect-[0.82] overflow-hidden ${
                index === 1 ? "mt-10 md:mt-16" : ""
              }`}
              key={photo.src}
            >
              <Image
                alt={photo.alt}
                className="object-cover"
                fill
                sizes="(max-width: 760px) 50vw, 28vw"
                src={photo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
