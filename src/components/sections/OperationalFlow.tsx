const steps = [
  {
    number: "01",
    title: "Receive",
    body: "A signed GitHub webhook reports a failed workflow.",
  },
  {
    number: "02",
    title: "Evaluate",
    body: "The rule engine matches the repository, workflow and conclusion.",
  },
  {
    number: "03",
    title: "Respond",
    body: "OpsWarden opens a high-severity incident with normalized context.",
  },
  {
    number: "04",
    title: "Coordinate",
    body: "Responders receive the event in the same real-time timeline.",
  },
] as const;

export function OperationalFlow() {
  return (
    <section
      id="automation"
      className="scroll-mt-24 border-t border-white/10 py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Automation
            </p>
            <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl">
              Turn external signals into coordinated action.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted lg:pt-8">
            OpsWarden validates incoming events, evaluates server-owned rules
            and keeps automation results visible to the operators who need to
            act on them.
          </p>
        </div>

        <ol className="mt-16 grid border-y border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="border-b border-white/10 py-8 md:px-8 xl:border-b-0 xl:border-r xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0"
            >
              <span className="font-mono text-xs text-gold">{step.number}</span>
              <h3 className="mt-5 text-xl font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
