import Link from "next/link";
import { ArrowRight, Bot, ShieldAlert } from "lucide-react";

export function CommandRoomCTA() {
  return (
    <section id="install" className="scroll-mt-28 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="glass relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center shadow-[0_32px_100px_rgba(0,0,0,0.22)] md:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(251,192,45,0.18),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_50%_84%,rgba(251,192,45,0.08),transparent_26%)]"
          />
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Live incident coordination
            </div>

            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl">
              Ship fearlessly,
              <br />
              resolve instantly.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl">
              OpsWarden coordinates your incidents and releases in real time,
              with an AI SRE that proposes the root cause and the runbook,
              straight in the incident timeline.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2">
                <ShieldAlert className="size-4 text-gold" />
                Incident rooms
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2">
                <Bot className="size-4 text-gold" />
                Warden AI suggestions
              </span>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="http://localhost:4242/en/signup"
                className="inline-flex items-center gap-3 rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-bg transition-all hover:scale-[1.02] hover:bg-gold-hover"
              >
                Open the command room
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="http://localhost:4242/en/login"
                className="inline-flex items-center gap-3 rounded-xl bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-white/[0.09]"
              >
                Operator sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
