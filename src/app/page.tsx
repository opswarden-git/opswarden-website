import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { IncidentPreview } from "@/components/sections/IncidentPreview";
import { OperationalFlow } from "@/components/sections/OperationalFlow";
import { ProductStory } from "@/components/sections/ProductStory";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
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
    body: "Link incidents to releases so unresolved operational risk blocks the path to production.",
  },
  {
    number: "03",
    title: "Live collaboration without context switching",
    body: "Share presence, assignments, timeline entries and private messages over real-time connections.",
  },
  {
    number: "04",
    title: "Permissions that match responsibility",
    body: "Give Observers, Responders and Managers distinct controls without fragmenting the workspace.",
  },
] as const;

const desktopFacts = [
  [
    "Native shell",
    "A lightweight Tauri application that reuses the production web interface.",
  ],
  [
    "Operational alerts",
    "Native notifications for assignments, escalations and blocked releases.",
  ],
  [
    "Shared state",
    "The same authenticated server, permissions and live operational data.",
  ],
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
        <div className="mx-auto grid max-w-[96rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28 lg:px-12">
          <div>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-text sm:text-6xl">
              Coordination that holds up under pressure.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              OpsWarden connects the people, state and decisions behind incident
              response without hiding critical context behind disconnected
              tools.
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
        </div>
      </section>

      <ProductStory
        title="Protect every release with live incident context."
        body="Validate ordered steps, connect operational risk and keep teams aligned before a change reaches production."
        bullets={[
          "Ordered validation makes release readiness explicit.",
          "Linked incidents automatically block and unblock releases.",
          "Owners, status and operational risk stay visible in one view.",
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

      <OperationalFlow />

      <section id="desktop" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[96rem] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-28 lg:px-12">
          <div>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-text sm:text-6xl">
              One product, wherever operators are working.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              The desktop client adds tray behavior and native notifications
              while preserving the same interface and server-owned rules as the
              web app.
            </p>
            <Link
              href={site.releases}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-gold"
            >
              Download the latest release
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <dl className="grid gap-10 sm:grid-cols-3 lg:grid-cols-1">
            {desktopFacts.map(([title, body]) => (
              <div key={title}>
                <dt className="text-lg font-semibold text-text">{title}</dt>
                <dd className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  {body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
