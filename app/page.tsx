"use client";

import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import CtaSection from "@/components/Home/CtaSection";
import Footer from "@/components/Home/Footer";

import { useEffect, useState } from "react";

const glassCardSoft =
  "backdrop-blur-xl bg-gradient-to-br from-white/55 via-sky-50/45 to-indigo-50/45 border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.1)]";
  
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 40);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#f2f6ff]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(147,197,253,0.35),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(196,181,253,0.26),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(186,230,253,0.3),transparent_35%),linear-gradient(180deg,#f8fbff_0%,#edf4ff_50%,#f5f9ff_100%)]" />
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-indigo-200/35 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl" />
      </div>

      <div className="relative">
        <Navbar />
        <Hero mounted={mounted} />
        <Features mounted={mounted} />
        <HowItWorks mounted={mounted} />
        <section id="pricing" className="px-4 py-4 sm:px-6">
          <div className={`mx-auto max-w-6xl rounded-2xl p-6 text-center ${glassCardSoft}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Pricing</p>
            <p className="mt-2 text-lg font-semibold text-slate-950">Simple pricing coming soon</p>
            <p className="mt-1 text-sm text-slate-700">Start free today and upgrade when your team grows.</p>
          </div>
        </section>
        <Testimonials mounted={mounted} />
        <CtaSection mounted={mounted} />
        <Footer />
      </div>
    </main>
  );
}
