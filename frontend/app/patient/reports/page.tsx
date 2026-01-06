"use client"
import React from 'react';
import { FileText, ChevronRight, Stethoscope, Clock, Download } from 'lucide-react';

export default function PatientReports() {
  const reports = [
    { date: "06 Jan 2026", result: "Stage 2 (Mild)", egfr: 92, doctorNote: "Hydrate and re-test in 48hrs." },
    { date: "01 Jan 2026", result: "Stage 1 (Normal)", egfr: 104, doctorNote: "Excellent baseline." },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom duration-700">
      <h1 className="text-4xl font-bold tracking-tighter mb-10">Health <span className="text-[#00C7B1]">Timeline.</span></h1>

      <div className="space-y-8 relative before:absolute before:left-[27px] before:top-4 before:bottom-0 before:w-px before:bg-gray-100">
        {reports.map((rpt, i) => (
          <div key={i} className="relative pl-20">
            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 w-14 h-14 bg-white border-4 border-[#F8F9FC] rounded-2xl shadow-sm flex items-center justify-center text-[#00C7B1]">
              <Clock size={24} />
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0F1B4C]/5 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest">{rpt.date}</span>
                  <h3 className="text-xl font-bold mt-1">uACR Analysis: {rpt.result}</h3>
                </div>
                <div className="bg-[#F8F9FC] px-6 py-3 rounded-2xl">
                   <p className="text-[10px] font-bold text-gray-400 uppercase">Current eGFR</p>
                   <p className="text-xl font-black text-[#0F1B4C]">{rpt.egfr} <span className="text-xs font-medium uppercase">mL/min</span></p>
                </div>
              </div>

              {/* DOCTOR'S PUSHED REVIEW */}
              <div className="bg-[#00C7B1]/5 border border-[#00C7B1]/10 rounded-2xl p-6 flex gap-4 items-start">
                <div className="bg-[#00C7B1] p-2 rounded-lg text-white">
                  <Stethoscope size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#00C7B1] uppercase tracking-widest mb-1">Clinical Directive</p>
                  <p className="text-sm font-medium italic text-[#0F1B4C]">"{rpt.doctorNote}"</p>
                </div>
              </div>

              <div className="flex justify-end mt-6 gap-3">
                 <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#6B7280] hover:text-[#0F1B4C] transition-colors">
                    <Download size={14} /> Save PDF
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}