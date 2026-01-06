"use client"
import React from 'react';
import { Plus, ChevronRight, CheckCircle2, AlertTriangle, Filter, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function PatientRoster() {
  const patients = [
    { id: 'RE-2026-01', name: 'Amitav Ghosh', egfr: 94, uacr: 'Normal', status: 'Verified', risk: 'Low' },
    { id: 'RE-2026-09', name: 'Priya Sharma', egfr: 52, uacr: 'Albuminuria+', status: 'Alert', risk: 'Critical' },
    { id: 'RE-2026-14', name: 'Rajesh Kumar', egfr: 78, uacr: 'Trace', status: 'Pending', risk: 'Moderate' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">Patient <span className="text-[#00C7B1]">Roster.</span></h1>
          <p className="text-[#6B7280] text-sm font-medium mt-1 uppercase tracking-widest">Azure AI Foundry Analytics • 2026 v1.0</p>
        </div>
        <button className="bg-[#00C7B1] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#009EA9] transition shadow-lg shadow-[#00C7B1]/20 flex items-center gap-3">
          <Plus size={18} /> New Clinical Case
        </button>
      </div>

      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#0F1B4C] text-white">
            <tr className="text-[10px] font-bold uppercase tracking-[0.3em]">
              <th className="px-10 py-6">Patient Identity</th>
              <th className="px-8 py-6">Screening Result</th>
              <th className="px-8 py-6">Azure AI Risk Level</th>
              <th className="px-8 py-6">Verification</th>
              <th className="px-8 py-6 text-right">Review</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {patients.map((p) => (
              <tr key={p.id} className="group hover:bg-[#F8F9FC] transition-colors cursor-pointer">
                <td className="px-10 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#F8F9FC] rounded-xl flex items-center justify-center font-bold text-[#00C7B1] text-xs group-hover:bg-[#00C7B1] group-hover:text-white transition-all">
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{p.name}</p>
                      <p className="text-[10px] text-[#6B7280] font-bold tracking-widest uppercase">{p.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="text-sm font-bold">eGFR: {p.egfr} <span className="text-[10px] text-gray-400 font-medium ml-1">mL/min</span></div>
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-tighter italic">{p.uacr}</p>
                </td>
                <td className="px-8 py-6">
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     p.risk === 'Critical' ? 'bg-red-50 text-red-500' : 'bg-[#00C7B1]/10 text-[#00C7B1]'
                   }`}>
                    {p.risk} Level
                   </span>
                </td>
                <td className="px-8 py-6">
                   <div className={`flex items-center gap-2 text-[10px] font-bold uppercase ${p.status === 'Alert' ? 'text-red-500' : 'text-[#00C7B1]'}`}>
                      {p.status === 'Alert' ? <AlertTriangle size={14} /> : <CheckCircle2 size={14} />} {p.status}
                   </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <Link href={`/doctor/review/${p.id}`}>
                    <button className="p-3 bg-gray-50 rounded-xl text-gray-300 group-hover:bg-[#0F1B4C] group-hover:text-white transition-all shadow-sm">
                      <ChevronRight size={18} />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}