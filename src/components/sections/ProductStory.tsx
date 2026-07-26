import Image from "next/image";

type ProductStoryProps = {
  id?: string;
  title: string;
  body: string;
  bullets: readonly string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export function ProductStory({
  id,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
}: ProductStoryProps) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[96rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div className={reverse ? "lg:order-2" : undefined}>
          <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-text sm:text-6xl">
            {title}
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted">{body}</p>

          <ul className="mt-9 max-w-xl space-y-4">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-4 text-sm leading-6 text-text sm:text-base"
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
          <div className="overflow-hidden rounded-2xl bg-panel shadow-[0_32px_100px_rgba(0,0,0,0.32)]">
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
