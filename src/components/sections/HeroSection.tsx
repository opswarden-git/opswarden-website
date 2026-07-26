import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { appLink, site } from "@/lib/site";

export function HeroSection() {
  const primaryHref = site.appUrl ? appLink("/en/signup") : site.github;
  const primaryLabel = site.appUrl ? "Get started" : "View on GitHub";

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_72%_8%,rgba(251,192,45,0.12),transparent_34%),radial-gradient(circle_at_18%_2%,rgba(255,255,255,0.05),transparent_28%)]"
      />

      <div className="relative mx-auto max-w-[90rem] px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="max-w-5xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:text-sm">
            Incident and release coordination
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-text sm:text-7xl lg:text-[6rem]">
            Stay in control when systems fail.
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            OpsWarden gives engineering teams one real-time workspace to
            investigate incidents, protect releases and coordinate operational
            decisions.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
            >
              {primaryLabel}
              {site.appUrl ? (
                <ArrowRight aria-hidden="true" className="size-4" />
              ) : (
                <ArrowUpRight aria-hidden="true" className="size-4" />
              )}
            </Link>
            <Link
              href={site.docs}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-white/[0.05]"
            >
              Read the documentation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted">
            Open source · Apache-2.0 · Web and desktop
          </p>
        </div>

        <figure className="mt-16 sm:mt-20 lg:mt-24">
          <div className="overflow-hidden rounded-xl border border-white/15 bg-panel shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
            <div
              className="flex h-11 items-center gap-2 border-b border-white/10 px-4"
              aria-hidden="true"
            >
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                Live incident queue
              </span>
            </div>
            <Image
              src={site.screenshots.incidents}
              alt="OpsWarden incident queue showing severity, state, assignee and live activity"
              width={2560}
              height={1600}
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-4 text-sm text-muted">
            One operational view for triage, ownership and response.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
