"use client"
import React from 'react';
import { ArrowLeft, History, Beaker, FileText, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function SubjectDetail() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <nav className="border-b border-gray-100 px-6 py-6 flex items-center justify-between">
        <Link href="/worker" className="p-2 text-gray-400 hover:text-black"><ArrowLeft size={20} /></Link>
        <span className="text-[10px] font-black uppercase tracking-widest">Manifest: RN-8801</span>
        <div className="w-8" />
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Amit Sharma</h1>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Male, 48 • Village Block A</p>
          </div>
          <div className="px-4 py-2 bg-red-50 text-red-600 rounded text-[10px] font-black uppercase tracking-widest border border-red-100 flex items-center gap-2">
            <AlertTriangle size={14} /> Critical Attention
          </div>
        </div>

        {/* CLINICAL SUMMARY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 border-t border-l border-gray-100 mb-16">
          {[
            { label: 'eGFR Status', val: '58 ml/min', sub: 'Stage 3a' },
            { label: 'Last uACR', val: '320 mg/g', sub: 'Macroalbuminuria' },
            { label: 'Assigned Doc', val: 'Dr. Sahu', sub: 'Renal Unit' },
            { label: 'Total Scans', val: '12', sub: 'Since Nov 2025' },
            { label: 'Kit Refill', val: '04 Units', sub: 'Available' },
            { label: 'Next Scan', val: 'Today', sub: 'Overdue' },
          ].map((item, i) => (
            <div key={i} className="p-6 border-r border-b border-gray-100">
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
               <p className="text-xl font-bold text-[#1A1A1A]">{item.val}</p>
               <p className="text-[9px] font-bold text-[#00C7B1] uppercase mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* RECENT ACTIVITY LIST */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
            <History size={14} /> Clinical Timeline
          </h3>
          <div className="divide-y divide-gray-50 border-t border-gray-50">
            {[1, 2, 3].map(i => (
              <div key={i} className="py-6 flex justify-between items-center group cursor-pointer hover:bg-gray-50 px-2 transition-all">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-gray-50 text-[#1A1A1A] rounded">
                    <Beaker size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Whatman Matrix Analysis</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Jan 0{i}, 2026 • Successful Upload</p>
                  </div>
                </div>
                <button className="text-[10px] font-black uppercase text-[#00C7B1] border-b border-transparent hover:border-[#00C7B1]">View Report</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}