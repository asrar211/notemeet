"use client";

import Error from '@/components/ui/Error';
import Spinner from '@/components/ui/Spinner';
import { Eye, EyeOff } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const glassCard =
  "backdrop-blur-xl bg-gradient-to-br from-white/70 via-sky-50/60 to-indigo-50/60 border border-white/75 shadow-[0_20px_50px_rgba(15,23,42,0.12)]";

export default function Login() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name}= e.target;

        setForm(prev => ({...prev, [name]: value}));
    }

    const handleSubmit =async (e: React.SubmitEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await signIn("credentials", {
                email: form.email,
                password: form.password,
                redirect: false
            })

            if (res?.error) {
                setError(res?.error)
                return;
            }

            router.push("/dashboard");
        } catch (err: any) {
            setError("Server Error, Please try again")
            console.log(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={`flex justify-center items-center h-dvh bg-slate-50`}>
            {error && <Error err={error}/>}
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl" />
            <div className={`px-4 pb-10 ${glassCard} rounded-xl flex flex-col w-full mx-5 sm:w-100`}>
                <div className="flex flex-col justify-start items-start pt-10 pb-5">
                    <h4 className="text-xl font-semibold text-sky-600">Welcome Back, Login here</h4>
                    <p className="text-sm text-slate-500">Enter your credentials to login to your account.</p>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-sm font-semibold text-slate-700 mb-1">Email</label>
                <input 
                className="px-1 py-1.5 border border-sky-200 rounded-lg outline-none text-base placeholder:text-sm placeholder:text-sky-300 focus:ring-3 focus:ring-slate-200 transition-all duration-300 text-slate-700"
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="jhon@example.com"/>
                <div className='flex justify-between items-center'>
                <label className="text-sm font-semibold text-slate-700 mb-1 mt-3">Password</label>
                <p className='text-sm mt-3 cursor-pointer text-sky-800'>Forgot Password?</p>
                </div>
                <div className='relative'>
                <input 
                className="px-1 w-full py-1.5 border border-sky-200 rounded-lg outline-none text-base placeholder:text-sm placeholder:text-sky-300 focus:ring-3 focus:ring-slate-200 transition-all duration-300 text-slate-700"
                type={showPassword ? "text" : "password"}
                name='password'
                value={form.password}
                onChange={handleChange}
                placeholder="********"/>
                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-3'>{showPassword ? <Eye size={20} color='green'/> : <EyeOff size={20} color='green'/>}</span>
                </div>
                <button
                 type="submit"
                 className="mt-7 py-2 rounded-lg bg-sky-600 text-sm font-semibold text-white   hover:scale-99 hover:bg-sky-500"
                >
                    {loading ? <Spinner/> : "Login"}
                </button>
            </form>
            <div className='mt-5'>
                <h4 className='text-sm font-semibold float-end'>Dont have an Account? <Link href='/signup'><button className='text-sky-600 cursor-pointer'>Sign Up</button></Link></h4>
            </div>
            </div>
        </div>
    )
};
