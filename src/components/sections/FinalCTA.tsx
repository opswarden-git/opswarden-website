import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { appLink, site } from "@/lib/site";

export function FinalCTA() {
  const primaryHref = site.appUrl ? appLink("/en/signup") : site.github;
  const primaryLabel = site.appUrl ? "Open OpsWarden" : "Explore the project";

  return (
    <section className="border-t border-white/10 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(251,192,45,0.15),transparent_34%)]"
          />
          <div className="relative max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Operate from one shared picture
            </p>
            <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-text sm:text-6xl">
              Bring incidents and releases into one operational workspace.
            </h2>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
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
                Read the docs
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
