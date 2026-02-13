const glassCard =
  "backdrop-blur-xl bg-gradient-to-br from-white/70 via-sky-50/60 to-indigo-50/60 border border-white/75 shadow-[0_20px_50px_rgba(15,23,42,0.12)]";
  
export default function CtaSection({ mounted }: { mounted: boolean }) {
  return (
    <section id="cta" className="px-4 py-14 sm:px-6 sm:py-24">
      <div
        className={`mx-auto max-w-4xl rounded-3xl p-8 text-center sm:p-10 ${glassCard} transition-all duration-700 ${mounted ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Get Early Access</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Create Your First Room in Seconds</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Start your next conversation with structured notes, clean audio, and clear follow-ups.
        </p>
        <form className="mx-auto mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your work email"
            className="h-12 flex-1 rounded-full border border-white/80 bg-white/85 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-sky-600 px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-sky-500"
          >
            Create Your First Room
          </button>
        </form>
      </div>
    </section>
  );
}