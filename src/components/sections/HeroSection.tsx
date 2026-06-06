import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import DisplayCards from '@/components/ui/display-cards';

const SEVERITIES = ['#3b82f6', '#f59e0b', '#fb7d3c', '#ef4444', '#3b82f6'];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44">
      {/* Gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,192,45,0.10),transparent_60%)] blur-[70px]"
      />

      {/* Copy — on top */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="animate-appear text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Ship fearlessly, <span className="text-gold">resolve instantly.</span>
        </h1>

        <p className="animate-appear max-w-3xl text-base leading-relaxed text-muted md:text-lg [animation-delay:100ms]">
          OpsWarden coordinates your incidents and releases in real time — with an
          AI SRE{' '}
          <br className="hidden md:inline" />
          that proposes the root cause and the runbook, straight in the incident
          timeline.
        </p>

        <div className="animate-appear pt-2 [animation-delay:200ms]">
          <Link
            href="http://localhost:4242/en/signup"
            className="flex w-fit items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-bg transition-all hover:scale-105 hover:bg-gold-hover"
          >
            Start now
          </Link>
        </div>
      </div>

      {/* Faux app window — below */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-5xl md:mt-20">
        <div className="pointer-events-none absolute right-2 top-[-5rem] hidden md:block">
          <DisplayCards />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-8 -z-10 h-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,192,45,0.08),transparent_70%)] blur-[70px]"
        />
        <div
          className={cn(
            'animate-appear glass overflow-hidden rounded-[1.4rem] p-2 [animation-delay:300ms]',
            '[mask-image:linear-gradient(to_bottom,#000_72%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000_72%,transparent)]'
          )}
        >
          <div className="overflow-hidden rounded-lg bg-bg/70">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <div className="ml-4 h-5 w-40 rounded bg-white/[0.06]" />
            </div>

            <div className="flex">
              {/* Sidebar skeleton */}
              <div className="hidden w-48 shrink-0 flex-col gap-3 p-5 sm:flex">
                <div className="mb-2 h-6 w-28 rounded bg-white/[0.06]" />
                {[64, 48, 56, 40].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded bg-white/10" />
                    <div className="h-3 rounded bg-white/[0.06]" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>

              {/* Incident list skeleton */}
              <div className="flex-1 space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <div className="h-5 w-32 rounded bg-white/[0.08]" />
                  <div className="h-6 w-20 rounded-full bg-gold/20" />
                </div>
                {SEVERITIES.map((color, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                    <div className="h-3 rounded bg-white/10" style={{ width: `${55 - i * 6}%` }} />
                    <div className="ml-auto h-5 w-16 rounded-full bg-white/[0.06]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.24em] text-muted md:justify-start">
          <span className="rounded-full bg-white/[0.05] px-4 py-2">Incident timeline</span>
          <span className="rounded-full bg-white/[0.05] px-4 py-2">Release-aware</span>
          <span className="rounded-full bg-white/[0.05] px-4 py-2">AI runbooks</span>
        </div>
      </div>
    </section>
  );
}
