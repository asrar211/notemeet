import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const glassCardSoft =
  "backdrop-blur-xl bg-gradient-to-br from-white/55 via-sky-50/45 to-indigo-50/45 border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.1)]";

export default function Navbar() {
    return (
        <header className="sticky top-4 z-40 px-4 sm:px-6">
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-6 ${glassCardSoft}`}
      >
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900 sm:text-base">
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          NoteMeet
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-slate-700 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative transition-colors duration-200 hover:text-slate-950">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          href="/login"
          className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition duration-200 hover:scale-105 hover:bg-sky-500 sm:text-sm"
        >
          Start Free
        </Link>
      </nav>
    </header>
    )
};
