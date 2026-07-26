import Image from "next/image";

type ProductStoryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export function ProductStory({
  id,
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
}: ProductStoryProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-white/10 py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div className={reverse ? "lg:order-2" : undefined}>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-text sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{body}</p>

          <ul className="mt-9 max-w-xl border-t border-white/10">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-4 border-b border-white/10 py-4 text-sm leading-6 text-text sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className={reverse ? "lg:order-1" : undefined}>
          <div className="overflow-hidden rounded-xl border border-white/15 bg-panel shadow-[0_28px_90px_rgba(0,0,0,0.3)]">
            <Image
              src={image}
              alt={imageAlt}
              width={2560}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
