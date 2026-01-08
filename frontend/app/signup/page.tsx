"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, User, 
  Stethoscope, Users,
  Loader2
} from 'lucide-react';
import { registerUser } from '../actions/register';

export default function SignupPage() {
  const [role, setRole] = useState('doctor');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const roleConfigs = {
    doctor: { 
      title: "Medical Practitioner", 
      desc: "Access patient analytics, AI screening tools, and FHIR-compliant reporting.", 
      icon: Stethoscope 
    },
    user: { 
      title: "Patient / Individual", 
      desc: "Monitor your personal kidney health metrics and scan your REnalyse cards.", 
      icon: User 
    },
    worker: { 
      title: "Health Worker", 
      desc: "Perform field-scans, manage village-level cohorts, and synchronize offline data.", 
      icon: Users 
    },
  };

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    
    const result = await registerUser(formData);
    
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
    
  }

  return (
    <main className="min-h-screen w-full flex bg-white overflow-hidden">
      
      {/* Left Side: Dynamic Context */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#f8f9fa] relative p-20 flex-col justify-between border-r border-gray-100">
        <div className="relative z-10">
          <Link href="/" className="text-3xl font-black text-[#1a1a1a] tracking-tighter">
            RE<span className="text-[#2563eb]">.</span>nalyse
          </Link>
          <div className="mt-24 space-y-8">
            <h1 className="text-6xl font-black text-[#1a1a1a] leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-left duration-700">
              Join the <br /> 
              <span className="text-[#2563eb] italic font-serif text-5xl">Diagnostic Network.</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-md leading-relaxed font-medium">
              Standardizing renal care through distributed AI infrastructure and Whatman-matrix analysis.
            </p>
          </div>
        </div>

        {/* Dynamic Role Badge */}
        <div className="relative z-10 p-10 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 transition-all duration-500 ease-out transform -rotate-2 hover:rotate-0 hover:scale-[1.02] cursor-default group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#2563eb]/10 rounded-2xl text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300">
              {React.createElement(roleConfigs[role as keyof typeof roleConfigs].icon, { size: 28 })}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#2563eb]">Selected Role</p>
              <h3 className="text-2xl font-black text-[#1a1a1a] tracking-tight">
                {roleConfigs[role as keyof typeof roleConfigs].title}
              </h3>
            </div>
          </div>
          <p className="text-gray-500 font-medium leading-relaxed">
            {roleConfigs[role as keyof typeof roleConfigs].desc}
          </p>
        </div>

        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2563eb]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Right Side: Multi-Role Signup Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-24 py-12">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h2 className="text-4xl font-black text-[#1a1a1a] tracking-tighter mb-2">Create Account.</h2>
          <p className="text-gray-500 mb-8 font-medium">Select your role to begin the onboarding protocol.</p>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-2 mb-10 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
            {Object.keys(roleConfigs).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  role === r 
                    ? "bg-[#1a1a1a] text-white shadow-lg" 
                    : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]"
                }`}
              >
                {r === 'worker' ? 'Health Worker' : r}
              </button>
            ))}
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-bold uppercase tracking-wider">
              {error}
            </div>
          )}

          <form action={handleSubmit} className="space-y-5">
            {/* Hidden field to pass role to Server Action */}
            <input type="hidden" name="role" value={role} />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">First Name *</label>
                <input name="firstName" type="text" required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Last Name *</label>
                <input name="lastName" type="text" required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all" placeholder="Doe" />
              </div>
            </div>

            {/* Role Specific Fields */}
            {role === 'doctor' && (
              <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Medical Registration Number *</label>
                <input name="registrationNumber" required type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all" placeholder="MCI-123456" />
              </div>
            )}

            {role === 'worker' && (
              <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Affiliated Institution / NGO *</label>
                <input name="institution" required type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all" placeholder="Health Foundation" />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Email Address *</label>
              <input name="email" type="email" required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all" placeholder="name@domain.com" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Password *</label>
              <input name="password" type="password" required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all" placeholder="••••••••" />
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className="w-full bg-[#1a1a1a] text-white p-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] flex justify-between items-center group hover:bg-[#2563eb] disabled:bg-gray-400 transition-all mt-6 shadow-xl shadow-[#1a1a1a]/10"
            >
              {loading ? (
                <>Processing... <Loader2 size={18} className="animate-spin" /></>
              ) : (
                <>Complete Onboarding <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <p className="mt-10 text-sm text-gray-500 text-center font-medium">
            Already registered? <Link href="/login" className="text-[#1a1a1a] font-black underline underline-offset-4 decoration-[#2563eb]">Sign In</Link>
          </p>
        </div>
      </div>
    </main>
  );
}