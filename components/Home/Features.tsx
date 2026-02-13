
const featureItems = [
  {
    title: "Instant Audio Meeting",
    description:
      "Start private 1:1 audio rooms in seconds with crystal-clear, low-latency voice.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 18a4 4 0 0 0 4-4V8a4 4 0 0 0-8 0v6a4 4 0 0 0 4 4Z" />
        <path d="M5 11v2a7 7 0 0 0 14 0v-2" />
        <path d="M12 20v3" />
      </svg>
    ),
  },
  {
    title: "Realtime Shared Notes",
    description:
      "Collaborate on a live note board while you talk so both sides stay aligned.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="4" y="3" width="16" height="18" rx="2.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Highlight to Action",
    description:
      "Mark key lines and instantly convert them into clear, assignable follow-ups.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 4h10l6 6v10H4z" />
        <path d="m13 4 7 7" />
        <path d="M8 14h8" />
      </svg>
    ),
  },
  {
    title: "Device-agnostic",
    description:
      "Join from desktop, tablet, or phone without install friction or compatibility issues.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="5" width="14" height="10" rx="2" />
        <rect x="18" y="8" width="3" height="8" rx="1" />
        <path d="M8 19h5" />
      </svg>
    ),
  },
];

const glassCardSoft =
  "backdrop-blur-xl bg-gradient-to-br from-white/55 via-sky-50/45 to-indigo-50/45 border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.1)]";
  
export default function Features({mounted}: {mounted: boolean}) {
    return (
            <section id="features" className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Features</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Designed for focused decisions</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Each block is built to keep both participants aligned and move discussions to outcomes.
        </p>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map((feature, index) => (
            <article
              key={feature.title}
              className={`${glassCardSoft} group rounded-2xl p-5 text-slate-900 transition-all duration-500 hover:-translate-y-1 hover:bg-white/65 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/40 bg-white/70 p-2.5 text-slate-800 transition-transform duration-300 group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-sky-800">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    )
};
