import Link from "next/link";
import { ArrowUpRight, Bell, Globe2, Monitor } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { IncidentPreview } from "@/components/sections/IncidentPreview";
import { OperationalFlow } from "@/components/sections/OperationalFlow";
import { ProductStory } from "@/components/sections/ProductStory";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const capabilities = [
  {
    number: "01",
    title: "One timeline from detection to resolution",
    body: "Keep state changes, notes, assignments and reactions in one chronological operational record.",
  },
  {
    number: "02",
    title: "Release safety tied to incident state",
    body: "Linked active incidents stop a release from advancing until they are resolved.",
  },
  {
    number: "03",
    title: "Live collaboration without losing context",
    body: "See who is present, assign owners, update the timeline and message teammates without leaving the incident.",
  },
  {
    number: "04",
    title: "Permissions that match responsibility",
    body: "Give Observers, Responders and Managers distinct controls without fragmenting the workspace.",
  },
] as const;

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <HeroBackdrop />
        <HeroSection />
        <IncidentPreview />
      </div>

      <section id="product" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
        <Reveal className="mx-auto grid max-w-[96rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28 lg:px-12">
          <div>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-text sm:text-6xl">
              Coordination that holds up under pressure.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              OpsWarden keeps the people, state and decisions behind incident
              response in one operational record, so teams spend less time
              reconstructing context across tools.
            </p>
          </div>

          <ol className="grid gap-x-14 gap-y-12 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <li
                key={capability.number}
                className="grid gap-4 sm:grid-cols-[2.5rem_1fr]"
              >
                <span className="font-mono text-xs text-gold">
                  {capability.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-text">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {capability.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <OperationalFlow />

      <ProductStory
        title="Protect every release with live incident context."
        body="Validate release steps in order, connect active incidents and keep teams aligned before a change reaches production."
        bullets={[
          "Ordered validation makes release readiness explicit.",
          "Linked incidents automatically block and unblock releases.",
          "Owners, status and linked incident risk stay visible in one view.",
        ]}
        image={site.screenshots.releases}
        imageAlt="OpsWarden release view showing validation steps, status and linked incident risk"
        reverse
      />

      <ProductStory
        title="Give every operator the right view and the right controls."
        body="Create a shared response workspace without flattening responsibilities or weakening operational safeguards."
        bullets={[
          "Observer, Responder and Manager roles define clear permissions.",
          "Invitations, moderation and Manager transfer support team governance.",
          "Presence and private messages keep collaboration close to the work.",
        ]}
        image={site.screenshots.teams}
        imageAlt="OpsWarden team workspace showing members, roles and access controls"
      />

      <section id="desktop" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-panel">
              <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                  <p className="font-mono text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                    Web + desktop
                  </p>
                  <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-text sm:text-5xl">
                    The command room follows the operator.
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-7 text-muted">
                    Use the browser for access anywhere, or the native client
                    for tray presence and operational notifications. Both stay
                    on the same live workspace.
                  </p>
                  <Link
                    href={site.releases}
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-gold"
                  >
                    Get the desktop app
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>

                <div className="platform-map relative min-h-[28rem] overflow-hidden border-t border-white/10 bg-bg/55 p-6 sm:p-10 lg:border-t-0 lg:border-l">
                  <div className="platform-grid absolute inset-0 opacity-40" />
                  <div className="relative flex h-full min-h-[23rem] items-center justify-center">
                    <div className="absolute top-[12%] left-[4%] w-[46%] rounded-2xl border border-white/10 bg-panel-strong p-4 shadow-2xl sm:p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-text">
                        <Globe2
                          aria-hidden="true"
                          className="size-4 text-gold"
                        />{" "}
                        Web app
                      </div>
                      <div className="mt-4 space-y-2">
                        <span className="block h-2 w-2/3 rounded-full bg-white/10" />
                        <span className="block h-2 w-full rounded-full bg-white/[0.06]" />
                        <span className="block h-2 w-4/5 rounded-full bg-white/[0.06]" />
                      </div>
                    </div>

                    <div className="absolute right-[3%] bottom-[10%] w-[48%] rounded-2xl border border-gold/20 bg-panel-strong p-4 shadow-2xl sm:p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-text">
                        <Monitor
                          aria-hidden="true"
                          className="size-4 text-gold"
                        />{" "}
                        Desktop app
                      </div>
                      <div className="mt-4 flex items-center gap-3 rounded-lg bg-bg/70 p-3">
                        <Bell
                          aria-hidden="true"
                          className="size-4 shrink-0 text-gold"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="block h-2 w-3/4 rounded-full bg-white/15" />
                          <span className="mt-2 block h-2 w-full rounded-full bg-white/[0.07]" />
                        </div>
                      </div>
                    </div>

                    <div className="platform-core relative z-10 flex size-28 flex-col items-center justify-center rounded-full border border-gold/30 bg-bg text-center shadow-[0_0_60px_rgb(251_192_45/0.14)]">
                      <span className="font-mono text-[10px] tracking-wider text-gold uppercase">
                        One core
                      </span>
                      <strong className="mt-1 text-xs text-text">
                        Live state
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
