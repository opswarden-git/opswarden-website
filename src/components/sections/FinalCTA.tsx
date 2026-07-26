import { ProductActions } from "@/components/ui/ProductActions";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-panel px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(251,192,45,0.16),transparent_34%)]"
          />
          <div className="relative max-w-5xl">
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-text sm:text-7xl">
              Bring incidents and releases into one operational workspace.
            </h2>
            <div className="mt-10">
              <ProductActions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
