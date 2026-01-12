"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowRight, Cpu, User, Stethoscope, Briefcase } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState<'doctor' | 'patient' | 'worker'>('patient');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd validate credentials here before routing
    router.push(`/${role}`);
  };

  return (
    <main className="min-h-screen w-full flex bg-white">
      {/* Left: Branding Wall (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#0A0A0A] p-20 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10">
          <Link href="/" className="text-3xl font-black text-white tracking-tighter">
            RE<span className="text-blue-500">.</span>nalyse
          </Link>
          <div className="mt-24">
            <h1 className="text-6xl font-black text-white leading-none tracking-tighter mb-6">
              Clinical Portal <br /> <span className="text-blue-500 italic font-serif">Secure Access.</span>
            </h1>
            <p className="text-blue-100/60 text-xl max-w-md">Authorized access for healthcare providers and diagnostic partners.</p>
          </div>
        </div>

        <div className="relative z-10 flex gap-10">
          <div className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck size={18} className="text-blue-500" /> FHIR v4 Secure
          </div>
          <div className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <Cpu size={18} className="text-blue-500" /> Azure AI Linked
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <div className="mb-10 lg:hidden">
            <span className="text-2xl font-black text-[#0A0A0A]">RE<span className="text-blue-500">.</span>nalyse</span>
          </div>

          {/* DEVELOPMENT NOTICE */}
          <div className="mb-8 inline-block">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-1">Infrastructure Status</p>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">
              The Clinical Portal is currently undergoing final infrastructure standardisation. Secure authentication protocols will be fully operational shortly.
            </p>
          </div>
          
          <h2 className="text-4xl font-black text-[#0A0A0A] tracking-tighter mb-2">Welcome Back.</h2>
          <p className="text-gray-500 mb-10 font-medium text-sm uppercase tracking-wide">Enter credentials to access the diagnostic dashboard.</p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Role Selection Tabs */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Select Access Role</label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-2xl">
                {[
                  { id: 'patient', icon: User, label: 'Patient' },
                  { id: 'doctor', icon: Stethoscope, label: 'Doctor' },
                  { id: 'worker', icon: Briefcase, label: 'Worker' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id as any)}
                    className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all ${
                      role === item.id 
                        ? 'bg-white text-blue-600 shadow-sm border border-gray-200' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <item.icon size={18} className="mb-1" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="name@institution.com" 
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all" 
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                <button type="button" className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:underline">Forgot?</button>
              </div>
              <input 
                required
                type="password" 
                placeholder="••••••••" 
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all" 
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#0A0A0A] text-white p-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex justify-between items-center group hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/10"
            >
              Sign In to {role} Panel <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-sm text-gray-400">
            Don't have an account? <Link href="/signup" className="text-[#0A0A0A] font-bold underline underline-offset-4 decoration-blue-500">Request access</Link>
          </p>
        </div>
      </div>
    </main>
  );
}