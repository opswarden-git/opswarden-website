import Image from "next/image";
import { ProductActions } from "@/components/ui/ProductActions";

export function HeroSection() {
  return (
    <section className="relative flex aspect-[3/4] w-full items-center md:aspect-[16/9]">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <Image
          src="/assets/icon-512.png"
          alt=""
          width={112}
          height={112}
          className="size-[90px] rounded-[24px]"
          priority
        />
        <h1 className="mt-8 text-[clamp(2rem,4.45vw,4rem)] font-medium leading-none tracking-[-0.03em] text-text">
          OpsWarden
        </h1>
        <p className="mt-6 max-w-lg text-balance text-base font-normal leading-relaxed text-text sm:text-lg">
          Incident response and release coordination, in one shared workspace.
        </p>
        <div className="mt-8">
          <ProductActions centered />
        </div>
      </div>
    </section>
  );
}
