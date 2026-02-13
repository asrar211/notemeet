import Link from "next/link";

const stats = [
  { label: "Meetings hosted", value: "25k+" },
  { label: "Avg setup time", value: "12 sec" },
  { label: "Action capture", value: "92%" },
];

const glassCardSoft =
  "backdrop-blur-xl bg-gradient-to-br from-white/55 via-sky-50/45 to-indigo-50/45 border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.1)]";
  
export default function Hero({mounted}: {mounted: boolean}) {
    return (
        <section className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 pb-10 pt-20 sm:px-6 sm:pb-14">
      <div
        className={`mx-auto grid w-full max-w-6xl gap-5 rounded-3xl lg:grid-cols-[1.2fr,0.8fr] lg:gap-10 lg:p-10 transform-gpu transition-all duration-700 ${mounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"}`}
      >
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/70 bg-white/75 px-3 py-1 text-xs text-sky-700">
            SMART 1:1 CONVERSATION WORKSPACE
          </p>
          <h1 className="text-balance text-3xl font-black leading-[1.05] text-slate-950 sm:text-5xl lg:text-6xl">
            Collaborative 1-on-1 Audio Meetings + Smart Notes
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-slate-800 sm:text-lg">
            Host an audio meeting, take realtime shared notes, and turn highlights into actions - instantly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-sky-500"
            >
              Get Started Free
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-white"
            >
              Watch Demo
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${glassCardSoft} rounded-md p-4 transition-all duration-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <p className="text-2xl font-bold text-slate-950 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
};
