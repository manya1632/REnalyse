"use client"
import React, { useState } from 'react';
import { 
  Camera, UserPlus, Search, 
  RefreshCw, ChevronRight, MapPin, 
  AlertCircle, ShieldCheck, ListFilter
} from 'lucide-react';
import Link from 'next/link';

export default function WorkerTerminal() {
  const [filter, setFilter] = useState('all');

  const patients = [
    { id: 'RN-8801', name: 'Amit Sharma', area: 'Village Block A', status: 'critical', urgency: 'High' },
    { id: 'RN-8805', name: 'Savitri Devi', area: 'Sector 4', status: 'stable', urgency: 'Routine' },
    { id: 'RN-8809', name: 'Rahul Verma', area: 'Village Block A', status: 'pending', urgency: 'Follow-up' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-[#00C7B1]/30">
      
      {/* 1. TOP UTILITY BAR: High Contrast & Minimal */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#1A1A1A] rounded flex items-center justify-center text-white font-black text-xs">RE</div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#1A1A1A]">Field Console</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[9px] font-black text-gray-400 uppercase">Unit Status</span>
            <span className="text-[10px] font-bold text-[#00C7B1] flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#00C7B1] rounded-full" /> Synchronized
            </span>
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400">
            <RefreshCw size={18} />
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* 2. PRIMARY ACTIONS: Large & Intentional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          <Link href="/worker/scan" className="group flex items-center justify-between p-8 bg-[#00C7B1] text-white rounded-lg hover:bg-[#00B5A1] transition-all">
            <div className="flex items-center gap-6">
              <Camera size={32} strokeWidth={1.5} />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Action 01</p>
                <h2 className="text-2xl font-bold">New Scan</h2>
              </div>
            </div>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/worker/new-patient" className="group flex items-center justify-between p-8 bg-white border border-gray-200 rounded-lg hover:border-[#1A1A1A] transition-all">
            <div className="flex items-center gap-6">
              <UserPlus size={32} strokeWidth={1.5} />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Action 02</p>
                <h2 className="text-2xl font-bold">Add Patient</h2>
              </div>
            </div>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3. PATIENT MANAGEMENT: Clean List View */}
        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#1A1A1A]">Assignment Log</h3>
          <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
            <ListFilter size={14} />
            <span>Filter: Raipur North</span>
          </div>
        </div>

        {/* Search Input - Minimalist */}
        <div className="relative mb-8">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
          <input 
            type="text" 
            placeholder="Search manifest by ID, name, or location..." 
            className="w-full pl-8 py-4 bg-transparent border-b border-gray-100 outline-none focus:border-[#00C7B1] text-sm font-medium transition-all"
          />
        </div>

        {/* List: No Cards, just Rows */}
        <div className="divide-y divide-gray-50 border-t border-gray-50">
          {patients.map((patient) => (
            <div key={patient.id} className="group py-6 flex items-center justify-between hover:px-4 hover:bg-gray-50/50 transition-all rounded-md">
              <div className="flex items-center gap-8">
                <div className="text-left">
                  <p className="text-[10px] font-black text-gray-300 uppercase mb-1">{patient.id}</p>
                  <h4 className="text-lg font-bold text-[#af9c9c]">{patient.name}</h4>
                </div>
                
                <div className="hidden sm:block">
                  <div className="flex items-center gap-1 text-[10px] font-black text-gray-400 uppercase">
                    <MapPin size={10} /> {patient.area}
                  </div>
                  <div className={`mt-1 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded w-fit ${
                    patient.status === 'critical' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {patient.status}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-[9px] font-black text-gray-300 uppercase">Priority</p>
                  <p className="text-xs font-bold text-[#1A1A1A]">{patient.urgency}</p>
                </div>
                <Link href= "/worker/patient/12">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#00C7B1] transition-all rounded">
                  Open File
                </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>

        {/* 4. FOOTER INFO: System Verification */}
        <footer className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-6 opacity-40 grayscale">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} />
            <p className="text-[10px] font-bold uppercase tracking-widest">FHIR Compliant Server • V2.0.4</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 REnalyse Health Infrastructure</p>
        </footer>

      </main>
    </div>
  );
}