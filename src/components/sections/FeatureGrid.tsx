import { Bot, GitBranch, ShieldCheck, Users, Waypoints } from "lucide-react";

const signals = [
  {
    icon: Waypoints,
    title: "One timeline for humans and systems",
    body: "Alerts, deploy events, operator notes, AI hypotheses, and decisions stay in the same room instead of leaking across tabs.",
  },
  {
    icon: GitBranch,
    title: "Releases and incidents in the same room",
    body: "OpsWarden keeps release context attached to the incident, so rollback, mitigation, and validation happen with the same picture in view.",
  },
  {
    icon: Bot,
    title: "AI SRE that proposes root cause and runbook",
    body: "Warden AI turns telemetry and timeline context into a working hypothesis and a next safe operational step while the room is still active.",
  },
];

const roles = ["SRE Lead", "Release Manager", "Backend On-call", "Platform Engineer"];

export function FeatureGrid() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-5xl">
            Coordinate faster under pressure.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {signals.map((signal) => (
            <article
              key={signal.title}
              className="glass rounded-[1.75rem] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <signal.icon className="size-5" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-text">{signal.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{signal.body}</p>
            </article>
          ))}
        </div>

        <div className="glass mt-8 rounded-[2rem] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <Users className="size-5" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-text">
                Designed for fast, role-based coordination
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                Everyone sees the same situation, but not everyone does the same
                job. OpsWarden keeps the room aligned without flattening roles,
                responsibilities, and decision paths.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-panel/45 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                <ShieldCheck className="size-4" />
                Active room
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-white/[0.05] px-4 py-2 text-sm text-text"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-text">
                  Incident opened and deploy linked automatically.
                </div>
                <div className="rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-text">
                  Warden AI proposes root cause and next runbook step.
                </div>
                <div className="rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-text">
                  Team validates, acknowledges, mitigates, and resolves in one flow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
