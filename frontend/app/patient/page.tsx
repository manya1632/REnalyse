"use client"
import React from 'react';
import { 
  Plus, 
  Dna, 
  Fingerprint, 
  MessageCircle, 
  ArrowRight, 
  Waves,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function PatientDashboard() {
  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* MINIMALIST HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-[10px] font-black tracking-[0.4em] text-[#00C7B1] uppercase mb-2">Patient Overview</p>
          <h1 className="text-5xl font-light tracking-tight text-[#0F1B4C]">
            Good morning, <span className="font-medium">John</span>
          </h1>
        </div>
        <div className="flex gap-4">
           <div className="text-right hidden sm:block">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Last Sync</p>
              <p className="text-sm font-semibold text-[#0F1B4C]">Jan 07, 2026 • 09:41</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: THE BIOMETRIC RING */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Decorative background blur */}
          <div className="absolute inset-0 bg-[#00C7B1]/5 blur-[100px] rounded-full" />
          
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
             {/* SVG Health Ring */}
             <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="48%" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                <circle 
                  cx="50%" cy="50%" r="48%" 
                  stroke="#00C7B1" strokeWidth="8" fill="none" 
                  strokeDasharray="300 100" 
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_rgba(0,199,177,0.4)]"
                />
             </svg>
             
             <div className="text-center z-10">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">eGFR Score</p>
                <div className="text-7xl font-light text-[#0F1B4C]">92</div>
                <div className="mt-2 inline-block px-3 py-1 bg-[#00C7B1]/10 text-[#00C7B1] rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Stable
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT: ACTION TILES */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* SCAN ACTION */}
          <Link href="/scan" className="group relative overflow-hidden bg-[#0F1B4C] rounded-[2rem] p-8 transition-all hover:-translate-y-1 active:scale-[0.98]">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <Plus size={80} strokeWidth={1} />
             </div>
             <h3 className="text-white text-xl font-medium mb-2">New Analysis</h3>
             <p className="text-white/40 text-xs mb-8 max-w-[180px]">Run a new cellulose strip scan for real-time tracking.</p>
             <div className="flex items-center gap-2 text-[#00C7B1] text-[10px] font-black uppercase tracking-widest">
                Start Scan <ArrowRight size={14} />
             </div>
          </Link>

          {/* DOCTOR DIRECTIVE */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
             <div className="w-10 h-10 bg-[#F8F9FC] rounded-xl flex items-center justify-center text-[#0F1B4C] mb-6">
                <Dna size={20} />
             </div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Latest Review</p>
             <p className="text-sm font-medium text-[#0F1B4C] leading-relaxed mb-6">
                "Values are within normal range for Stage 2. Maintain hydration levels."
             </p>
             <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                <div className="w-8 h-8 rounded-full bg-[#00C7B1] flex items-center justify-center text-white text-[10px] font-bold">HS</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Dr. Sahu</span>
             </div>
          </div>

          {/* CHAT TILE */}
          <Link href="/patient/messages" className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:border-[#00C7B1] transition-all group">
             <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#F8F9FC] rounded-2xl text-[#00C7B1]">
                   <MessageCircle size={20} />
                </div>
                <span className="flex h-2 w-2 rounded-full bg-[#00C7B1]" />
             </div>
             <h4 className="font-bold text-[#0F1B4C] mb-1">Consultation</h4>
             <p className="text-[10px] text-gray-400 font-medium">1 Unread message from clinic</p>
          </Link>

          {/* PRIVACY TILE */}
          <Link href="/patient/privacy" className="bg-[#F8F9FC] border border-transparent rounded-[2rem] p-8 hover:bg-white hover:border-gray-100 transition-all">
             <div className="p-3 bg-white rounded-2xl text-[#0F1B4C] w-fit mb-6 shadow-sm">
                <Fingerprint size={20} />
             </div>
             <h4 className="font-bold text-[#0F1B4C] mb-1">Data Shield</h4>
             <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Access: Encrypted</p>
          </Link>

        </div>
      </div>

      {/* FOOTER METRIC SECTION */}
      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-12">
         <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-2">Creatinine</span>
            <span className="text-xl font-medium text-[#0F1B4C]">1.1 <span className="text-xs text-gray-400">mg/dL</span></span>
         </div>
         <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-2">Albumin</span>
            <span className="text-xl font-medium text-[#0F1B4C]">Trace <span className="text-xs text-gray-400">(+)</span></span>
         </div>
         <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-2">Scan Consistency</span>
            <span className="text-xl font-medium text-[#00C7B1]">98%</span>
         </div>
      </div>
    </div>
  );
}