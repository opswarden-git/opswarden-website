import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { appLink, site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] bg-[radial-gradient(circle_at_78%_8%,rgba(251,192,45,0.16),transparent_32%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.055),transparent_28%)]"
      />

      <div className="relative mx-auto max-w-[96rem] px-5 pb-24 pt-24 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-40">
        <h1 className="text-[clamp(3.65rem,13vw,12rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-text">
          OpsWarden
        </h1>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <p className="max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-text sm:text-5xl">
            Incident response and release coordination, in one shared workspace.
          </p>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-muted lg:text-right">
              Give engineering teams a live view of incidents, operational risk
              and every decision on the path to resolution.
            </p>
            <div className="flex flex-wrap gap-3">
              {site.appUrl ? (
                <>
                  <Link
                    href={appLink("/en/signup")}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
                  >
                    Sign up
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <Link
                    href={appLink("/en/login")}
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-white/[0.06]"
                  >
                    Log in
                  </Link>
                </>
              ) : (
                <Link
                  href={site.docs}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-bg transition-colors hover:bg-gold-hover"
                >
                  Get started
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl bg-panel shadow-[0_48px_140px_rgba(0,0,0,0.46)] sm:mt-24">
          <Image
            src={site.screenshots.incidents}
            alt="OpsWarden incident queue showing severity, state, assignee and live activity"
            width={2560}
            height={1600}
            priority
            sizes="(max-width: 768px) 100vw, 1500px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
