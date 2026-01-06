"use client"
import React, { useState } from 'react';
import { Search, Plus, ChevronRight, Clock, CheckCircle2, Lock, User, Phone, X, Shield } from 'lucide-react';
import Link from 'next/link';

export default function DoctorDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const patients = [
    { id: 'RN-7702', name: 'James Wilson', status: 'Shared', lastUpdate: '10 mins ago', risk: 'Stable' },
    { id: 'RN-8812', name: 'Sarah Jenkins', status: 'Pending', lastUpdate: '2 hours ago', risk: 'Critical' },
    { id: 'RN-4409', name: 'Michael Ross', status: 'Shared', lastUpdate: '1 day ago', risk: 'Requires Review' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-10 lg:p-16 animate-in fade-in duration-700">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">My <span className="text-blue-600">Patients.</span></h1>
          <p className="text-slate-400 font-medium mt-1">St. Jude Renal Center • 42 active streams</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-blue-600 transition-all flex items-center gap-3"
        >
          <Plus size={18} /> New Patient
        </button>
      </header>

      {/* ROSTER TABLE */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-10 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input type="text" placeholder="Search roster..." className="pl-11 pr-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none w-64 focus:ring-4 ring-blue-50/50" />
          </div>
        </div>

        <div className="divide-y divide-slate-50">
          {patients.map((p) => (
            <Link href={`/doctor/review/${p.id}`} key={p.id}>
              <div className="px-10 py-7 flex items-center justify-between hover:bg-slate-50/50 transition-all group cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-slate-400 text-xs">{p.name.charAt(0)}</div>
                  <div>
                    <p className="font-black text-slate-800 text-sm">{p.name}</p>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{p.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-12">
                  <div className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${p.status === 'Shared' ? 'text-green-500' : 'text-slate-300'}`}>
                    {p.status === 'Shared' ? <CheckCircle2 size={12} /> : <Lock size={12} />} {p.status}
                  </div>
                  <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest ${p.risk === 'Critical' ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-500'}`}>{p.risk}</span>
                  <ChevronRight size={20} className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ADD PATIENT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-[3rem] shadow-2xl p-10">
            <h2 className="text-2xl font-black mb-2 text-slate-900">New Invite.</h2>
            <div className="space-y-4 mt-6">
              <input placeholder="Full Legal Name" className="w-full px-6 py-4 bg-slate-50 rounded-2xl text-sm font-bold border-none" />
              <input placeholder="Mobile Number" className="w-full px-6 py-4 bg-slate-50 rounded-2xl text-sm font-bold border-none" />
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest mt-4 shadow-lg shadow-blue-100">Send Connection Invite</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}