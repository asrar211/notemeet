const steps = [
  {
    title: "Create Meeting",
    detail: "Spin up a private room and share access in one click.",
    number: "01",
  },
  {
    title: "Join with Link",
    detail: "Your partner joins instantly from any device and browser.",
    number: "02",
  },
  {
    title: "Take Notes & Highlight",
    detail: "Capture key points live, highlight decisions, and ship actions.",
    number: "03",
  },
];

const glassCard =
  "backdrop-blur-xl bg-gradient-to-br from-white/70 via-sky-50/60 to-indigo-50/60 border border-white/75 shadow-[0_20px_50px_rgba(15,23,42,0.12)]";
export default function HowItWorks({mounted}: {mounted: boolean}) {
    return (
        <section id="how-it-works" className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">How It Works</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">From meeting to action in 3 steps</h2>
        <div className="mt-8 overflow-x-auto p-2">
          <div className="flex min-w-max gap-4 sm:min-w-0 sm:grid sm:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`${glassCard} w-[18rem] rounded-2xl p-6 sm:w-auto ${mounted ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">Step {step.number}</p>
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-sky-800">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
};
