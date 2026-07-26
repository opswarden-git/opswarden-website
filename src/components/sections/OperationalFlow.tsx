const steps = [
  ["01", "Receive", "A signed GitHub webhook reports a failed workflow."],
  [
    "02",
    "Evaluate",
    "The rule engine matches the repository, workflow and conclusion.",
  ],
  [
    "03",
    "Respond",
    "OpsWarden opens a high-severity incident with normalized context.",
  ],
  [
    "04",
    "Coordinate",
    "Responders receive the event in the same real-time timeline.",
  ],
] as const;

export function OperationalFlow() {
  return (
    <section id="automation" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-panel px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-24">
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-text sm:text-6xl">
              Turn external signals into coordinated action.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted lg:pt-3">
              OpsWarden validates incoming events, evaluates server-owned rules
              and keeps automation results visible to the operators who need to
              act on them.
            </p>
          </div>

          <ol className="mt-16 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map(([number, title, body]) => (
              <li key={number}>
                <span className="font-mono text-xs text-gold">{number}</span>
                <h3 className="mt-5 text-xl font-semibold text-text">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
