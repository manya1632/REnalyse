"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, User, 
  Stethoscope, Building2 
} from 'lucide-react';

export default function SignupPage() {
  const [role, setRole] = useState('doctor');

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
    organisation: { 
      title: "Health Institution", 
      desc: "Manage multi-worker deployments, bulk procurement, and regional data.", 
      icon: Building2 
    },
  };

  return (
    <main className="min-h-screen w-full flex bg-white overflow-hidden">
      
      {/* Left Side: Dynamic Context */}
      <div className="hidden lg:flex lg:w-1/2 bg-renalyse-light relative p-20 flex-col justify-between border-r border-gray-100">
        <div className="relative z-10">
          <Link href="/" className="text-3xl font-black text-renalyse-dark tracking-tighter">
            RE<span className="text-renalyse-primary">.</span>nalyse
          </Link>
          <div className="mt-24 space-y-8">
            <h1 className="text-6xl font-black text-renalyse-dark leading-[0.9] tracking-tighter">
              Join the <br /> 
              <span className="text-renalyse-primary italic font-serif text-5xl">Diagnostic Network.</span>
            </h1>
            <p className="text-renalyse-text-gray text-xl max-w-md leading-relaxed font-medium">
              Standardizing renal care through distributed AI infrastructure and Whatman-matrix analysis.
            </p>
          </div>
        </div>

        {/* Dynamic Role Badge */}
        <div className="relative z-10 p-10 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 transform -rotate-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-renalyse-primary/10 rounded-2xl text-renalyse-primary">
              {React.createElement(roleConfigs[role as keyof typeof roleConfigs].icon, { size: 28 })}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-renalyse-primary">Selected Role</p>
              <h3 className="text-2xl font-black text-renalyse-dark">
                {roleConfigs[role as keyof typeof roleConfigs].title}
              </h3>
            </div>
          </div>
          <p className="text-renalyse-text-gray font-medium">
            {roleConfigs[role as keyof typeof roleConfigs].desc}
          </p>
        </div>
      </div>

      {/* Right Side: Multi-Role Signup Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-24 py-12">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h2 className="text-4xl font-black text-renalyse-dark tracking-tighter mb-2">Create Account.</h2>
          <p className="text-renalyse-text-gray mb-8 font-medium">Select your role to begin the onboarding protocol.</p>

          {/* Role Selection Grid - Adjusted to grid-cols-3 */}
          <div className="grid grid-cols-3 gap-2 mb-10 bg-renalyse-light p-1.5 rounded-2xl border border-gray-100">
            {Object.keys(roleConfigs).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  role === r 
                    ? "bg-renalyse-dark text-white shadow-lg" 
                    : "text-renalyse-dark/40 hover:text-renalyse-dark"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-renalyse-dark/40">First Name</label>
                <input type="text" className="w-full p-4 bg-renalyse-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-renalyse-primary/20 outline-none" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-renalyse-dark/40">Last Name</label>
                <input type="text" className="w-full p-4 bg-renalyse-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-renalyse-primary/20 outline-none" placeholder="Doe" />
              </div>
            </div>

            {/* Conditional Field for Professional Users */}
            {(role === 'doctor' || role === 'organisation') && (
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-renalyse-dark/40">
                  {role === 'doctor' ? 'Medical Registration Number' : 'Institution Name'}
                </label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-renalyse-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-renalyse-primary/20 outline-none" 
                  placeholder={role === 'doctor' ? "MCI-123456" : "Hospital / NGO Name"}
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-renalyse-dark/40">Email Address</label>
              <input type="email" className="w-full p-4 bg-renalyse-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-renalyse-primary/20 outline-none" placeholder="name@domain.com" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-renalyse-dark/40">Password</label>
              <input type="password" className="w-full p-4 bg-renalyse-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-renalyse-primary/20 outline-none" placeholder="••••••••" />
            </div>

            <button className="w-full bg-renalyse-dark text-white p-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] flex justify-between items-center group hover:bg-renalyse-primary transition-all mt-6">
              Complete Onboarding <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-sm text-renalyse-text-gray text-center font-medium">
            Already registered? <Link href="/login" className="text-renalyse-dark font-black underline underline-offset-4 decoration-renalyse-primary">Sign In</Link>
          </p>
        </div>
      </div>
    </main>
  );
}