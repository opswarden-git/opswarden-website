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

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,35rem)_minmax(22rem,25rem)] lg:justify-between">
          <div className="flex max-w-[35rem] flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h1 className="animate-appear text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              <span className="block whitespace-nowrap">
                Ship <span className="text-gold">fearlessly</span>,
              </span>
              <span className="mt-1 block whitespace-nowrap">
                resolve <span className="text-gold">instantly.</span>
              </span>
            </h1>

            <p className="animate-appear max-w-[34rem] text-base leading-8 text-muted md:text-[1.2rem] [animation-delay:100ms]">
              OpsWarden coordinates your incidents and releases in real time — with an AI
              SRE that proposes the root cause and the runbook, straight in the incident
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

          <div className="flex justify-center lg:justify-end">
            <DisplayCards />
          </div>
        </div>
      </div>

      {/* Faux app window — below */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-6xl md:mt-24">
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
      </div>
    </section>
  );
}
