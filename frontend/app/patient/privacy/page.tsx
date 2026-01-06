"use client"
import React, { useState } from 'react';
import { ShieldCheck, UserPlus, Lock, Unlock, AlertCircle } from 'lucide-react';

export default function PrivacyPage() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Himanshu Sahu", clinic: "NIT Raipur Health Unit", access: true },
    { id: 2, name: "Dr. Aris Medical", clinic: "St. Jude Renal Center", access: false },
  ]);

  const toggleAccess = (id: number) => {
    setDoctors(doctors.map(doc => 
      doc.id === id ? { ...doc, access: !doc.access } : doc
    ));
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter">Data <span className="text-[#00C7B1]">Privacy.</span></h1>
        <p className="text-[#6B7280] font-medium text-sm mt-2">You have total control over your clinical data logs.</p>
      </div>

      <div className="bg-[#0F1B4C] text-white p-8 rounded-[3rem] mb-8 relative overflow-hidden shadow-2xl shadow-[#0F1B4C]/20">
        <ShieldCheck className="absolute top-[-20px] right-[-20px] w-48 h-48 opacity-5" />
        <h3 className="text-xl font-bold mb-2">Azure Secure Consent</h3>
        <p className="text-sm text-blue-100/60 max-w-md mb-6">Your eGFR and uACR results are encrypted. Doctors can only view them if you provide a digital handshake.</p>
        <button className="bg-[#00C7B1] px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          <UserPlus size={16} /> Invite New Doctor
        </button>
      </div>

      <div className="grid gap-4">
        {doctors.map(doc => (
          <div key={doc.id} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${doc.access ? 'bg-[#00C7B1]/10 text-[#00C7B1]' : 'bg-gray-100 text-gray-400'}`}>
                {doc.access ? <Unlock size={20} /> : <Lock size={20} />}
              </div>
              <div>
                <h4 className="font-bold text-sm">{doc.name}</h4>
                <p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">{doc.clinic}</p>
              </div>
            </div>
            
            <button 
              onClick={() => toggleAccess(doc.id)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                doc.access 
                ? 'bg-red-50 text-red-500 hover:bg-red-500 hover:text-white' 
                : 'bg-[#F8F9FC] text-[#0F1B4C] hover:bg-[#00C7B1] hover:text-white'
              }`}
            >
              {doc.access ? 'Revoke Access' : 'Grant Access'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}