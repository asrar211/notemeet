const glassCard =
  "backdrop-blur-xl bg-gradient-to-br from-white/70 via-sky-50/60 to-indigo-50/60 border border-white/75 shadow-[0_20px_50px_rgba(15,23,42,0.12)]";


export default function Login() {
    return (
        <div className={`flex justify-center items-center h-dvh bg-slate-50`}>
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl" />
            <form className={`px-4 py-10 ${glassCard} rounded-xl flex flex-col w-full mx-5 xl:w-100`}>
                <label className="text-sm font-semibold text-slate-700 mb-1">Email</label>
                <input 
                className="px-1 py-1.5 border border-sky-200 rounded-lg outline-none text-base placeholder:text-sm placeholder:text-sky-300 focus:ring-3 focus:ring-slate-200 transition-all duration-300 text-slate-700"
                type="email"
                placeholder="jhon@example.com"/>
                <label className="text-sm font-semibold text-slate-700 mb-1 mt-3">Password</label>
                <input 
                className="px-1 py-1.5 border border-sky-200 rounded-lg outline-none text-base placeholder:text-sm placeholder:text-sky-300 focus:ring-3 focus:ring-slate-200 transition-all duration-300 text-slate-700"
                type="password"
                placeholder="********"/>
                <button
                 type="submit"
                 className="mt-7 py-1.5 rounded-lg bg-sky-600 text-sm font-semibold text-white   hover:scale-99 hover:bg-sky-500"
                >
                    Login
                </button>
            </form>
        </div>
    )
};
