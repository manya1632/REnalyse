import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Cpu } from 'lucide-react';

export default function Login() {
  return (
    <main className="min-h-screen w-full flex bg-white">
      {/* Left: Branding Wall (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-renalyse-dark p-20 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10">
          <Link href="/" className="text-3xl font-black text-white tracking-tighter">
            RE<span className="text-renalyse-primary">.</span>nalyse
          </Link>
          <div className="mt-24">
            <h1 className="text-6xl font-black text-white leading-none tracking-tighter mb-6">
              Clinical Portal <br /> <span className="text-renalyse-primary italic font-serif">Secure Access.</span>
            </h1>
            <p className="text-blue-100/60 text-xl max-w-md">Authorized access for healthcare providers and diagnostic partners.</p>
          </div>
        </div>

        <div className="relative z-10 flex gap-10">
          <div className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck size={18} className="text-renalyse-primary" /> FHIR v4 Secure
          </div>
          <div className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <Cpu size={18} className="text-renalyse-primary" /> Azure AI Linked
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <div className="mb-10 lg:hidden">
            <span className="text-2xl font-black text-renalyse-dark">RE<span className="text-renalyse-primary">.</span>nalyse</span>
          </div>
          
          <h2 className="text-4xl font-black text-renalyse-dark tracking-tighter mb-2">Welcome Back.</h2>
          <p className="text-renalyse-text-gray mb-10 font-medium">Enter credentials to access the diagnostic dashboard.</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-renalyse-dark/40">Email Address</label>
              <input type="email" placeholder="name@institution.com" className="w-full p-4 bg-renalyse-light border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-renalyse-primary/20 transition-all" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[10px] font-black uppercase tracking-widest text-renalyse-dark/40">Password</label>
                <button className="text-[10px] font-black uppercase tracking-widest text-renalyse-primary">Forgot?</button>
              </div>
              <input type="password" placeholder="••••••••" className="w-full p-4 bg-renalyse-light border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-renalyse-primary/20 transition-all" />
            </div>
            <button className="w-full bg-renalyse-dark text-white p-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex justify-between items-center group hover:bg-renalyse-primary transition-all">
              Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-sm text-renalyse-text-gray">
            Don't have an account? <Link href="/signup" className="text-renalyse-dark font-bold underline underline-offset-4 decoration-renalyse-primary">Request access</Link>
          </p>
        </div>
      </div>
    </main>
  );
}