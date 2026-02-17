"use client"

import Error from '@/components/ui/Error';
import Spinner from '@/components/ui/Spinner';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

import { useState } from "react";

const glassCard =
  "backdrop-blur-xl bg-gradient-to-br from-white/70 via-sky-50/60 to-indigo-50/60 border border-white/75 shadow-[0_20px_50px_rgba(15,23,42,0.12)]";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await axios.post("/api/auth/register", form);
            if (res.status === 201) {
                router.push("/login");
            }   
        } catch (err: any) {
            if (err.response && err.response.data?.error) {
            setError(err.response.data.error);
            } else {
                setError("Something went wrong. Please try again.");
            }
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
                    <h4 className="text-xl font-semibold text-sky-600">Welcome, Create your Account</h4>
                    <p className="text-sm text-slate-500">Enter credentials to create your account.</p>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-sm font-semibold text-slate-700 mb-1">Name</label>
                <input 
                className="px-1 py-1.5 border border-sky-200 rounded-lg outline-none text-base placeholder:text-sm placeholder:text-sky-300 focus:ring-3 focus:ring-slate-200 transition-all duration-300 text-slate-700"
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Jhon Doe"/>
                <label className="text-sm font-semibold text-slate-700 mb-1 mt-3">Username</label>
                <input 
                className="px-1 py-1.5 border border-sky-200 rounded-lg outline-none text-base placeholder:text-sm placeholder:text-sky-300 focus:ring-3 focus:ring-slate-200 transition-all duration-300 text-slate-700"
                type="text"
                name='username'
                value={form.username}
                onChange={handleChange}
                placeholder="jhondoe123"/>
                <label className="text-sm font-semibold text-slate-700 mb-1 mt-3">Email</label>
                <input 
                className="px-1 py-1.5 border border-sky-200 rounded-lg outline-none text-base placeholder:text-sm placeholder:text-sky-300 focus:ring-3 focus:ring-slate-200 transition-all duration-300 text-slate-700"
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="jhon@example.com"/>
                <label className="text-sm font-semibold text-slate-700 mb-1 mt-3">Password</label>
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
                    {loading ? <Spinner/> : "Create Account"}
                </button>
            </form>
            <div className='mt-5'>
                <h4 className='text-sm font-semibold float-end'>Already have an Account? <Link href='/login'><button className='text-sky-600 cursor-pointer'>Login</button></Link></h4>
            </div>
            </div>
        </div>
    )
};
