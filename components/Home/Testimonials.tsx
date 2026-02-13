const testimonials = [
  {
    name: "Priya N.",
    role: "Product Manager",
    quote:
      "Our 1:1s finally end with clear actions. Notes and highlights in one flow changed everything.",
  },
  {
    name: "Marcus T.",
    role: "Engineering Lead",
    quote:
      "The audio quality is clean, and shared notes remove all post-meeting confusion.",
  },
  {
    name: "Lena R.",
    role: "Founder",
    quote:
      "It feels lightweight but powerful. We now run investor and hiring calls in NoteMeet.",
  },
];

const glassCardSoft =
  "backdrop-blur-xl bg-gradient-to-br from-white/55 via-sky-50/45 to-indigo-50/45 border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.1)]";

export default function Testimonials({ mounted }: { mounted: boolean }) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Social Proof</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by teams running critical 1:1s</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`${glassCardSoft} rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/65 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-sm tracking-[0.18em] text-amber-500">★★★★★</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-800">&quot;{item.quote}&quot;</p>
              <div className="mt-5 border-t border-white/40 pt-4">
                <p className="text-sm font-semibold text-sky-800">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
