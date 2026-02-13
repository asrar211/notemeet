export default function Footer() {
  return (
    <footer id="contact" className="px-4 pb-8 pt-14 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/75 bg-white/60 p-6 text-slate-700 backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold tracking-wide">NoteMeet</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
            <a href="#" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">Copyright {new Date().getFullYear()} NoteMeet. All rights reserved.</p>
      </div>
    </footer>
  );
}