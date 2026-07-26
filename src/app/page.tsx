import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { OperationalFlow } from "@/components/sections/OperationalFlow";
import { ProductStory } from "@/components/sections/ProductStory";
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
  {
    number: "05",
    title: "Automation operators can understand",
    body: "Surface rule results and failures in real time so automated decisions stay visible and actionable.",
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
      <HeroSection />

      <section
        aria-label="Technology overview"
        className="border-b border-white/10"
      >
        <div className="mx-auto flex max-w-[90rem] flex-wrap gap-x-8 gap-y-3 px-5 py-6 font-mono text-xs uppercase tracking-[0.18em] text-muted sm:px-8 lg:px-12">
          <span>Rust / Axum</span>
          <span>PostgreSQL</span>
          <span>WebSockets</span>
          <span>Next.js</span>
          <span>Tauri</span>
        </div>
      </section>

      <section id="product" className="scroll-mt-24 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              One operational picture
            </p>
            <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-text sm:text-5xl">
              Coordination that holds up under pressure.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              OpsWarden connects the people, state and decisions behind incident
              response without hiding critical context behind disconnected
              tools.
            </p>
          </div>

          <ol className="border-t border-white/10">
            {capabilities.map((capability) => (
              <li
                key={capability.number}
                className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[3rem_0.9fr_1.1fr] sm:gap-8"
              >
                <span className="font-mono text-xs text-gold">
                  {capability.number}
                </span>
                <h3 className="text-lg font-semibold leading-7 text-text">
                  {capability.title}
                </h3>
                <p className="text-sm leading-6 text-muted">
                  {capability.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProductStory
        eyebrow="Release coordination"
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
        eyebrow="Teams and access"
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

      <section
        id="desktop"
        className="scroll-mt-24 border-t border-white/10 py-20 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Web and desktop
              </p>
              <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-text sm:text-5xl">
                One product, wherever operators are working.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                The desktop client adds tray behavior and native notifications
                while preserving the same interface and server-owned rules as
                the web app.
              </p>
              <Link
                href={site.releases}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text underline decoration-white/30 underline-offset-4 transition-colors hover:text-gold"
              >
                Download the latest release
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <dl className="border-t border-white/10">
              {desktopFacts.map(([title, body]) => (
                <div key={title} className="border-b border-white/10 py-7">
                  <dt className="text-lg font-semibold text-text">{title}</dt>
                  <dd className="mt-2 max-w-xl text-sm leading-6 text-muted">
                    {body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
