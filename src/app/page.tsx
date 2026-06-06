import { BGPattern } from '@/components/ui/BGPattern';
import { CommandRoomCTA } from '@/components/sections/CommandRoomCTA';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <BGPattern
          variant="dots"
          mask="fade-edges"
          size={26}
          fill="rgba(255,255,255,0.12)"
          className="!z-0 opacity-100"
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <FeatureGrid />

        <section id="ressources" className="scroll-mt-28 px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                Resources
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                Documentation, quickstarts, and implementation guidance.
              </h2>
            </div>
            <div className="glass rounded-[1.75rem] p-8 lg:col-span-2">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.25rem] bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-text">Quickstart</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Run the marketing site on `3002`, the product on `4242`, and the
                    server on `8080` for a full local stack.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-text">Product docs</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Explore the incident lifecycle, teams, RBAC, and Warden AI flows
                    before wiring integrations.
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-text">Ops notes</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Deployment, Docker, and infrastructure concerns stay in the
                    sibling repos where they belong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="scroll-mt-28 px-6 pb-8 pt-10 md:pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="glass rounded-[2rem] px-8 py-10 md:px-10">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                    Community
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                    Follow the build, inspect the code, and join the feedback loop.
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {["GitHub", "Discord", "X / Twitter"].map((item) => (
                    <div key={item} className="rounded-[1.25rem] bg-white/[0.04] px-5 py-6 text-center">
                      <p className="text-sm font-semibold text-text">{item}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Public updates, discussion, and release notes as the product matures.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CommandRoomCTA />
      </div>
    </div>
  );
}
