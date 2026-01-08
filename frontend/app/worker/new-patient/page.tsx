"use client"
import React from 'react';
import { ArrowLeft, User, MapPin, Phone, Fingerprint, Save } from 'lucide-react';
import Link from 'next/link';

export default function NewPatientRegistration() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <nav className="border-b border-gray-100 px-6 py-6 flex items-center gap-6">
        <Link href="/worker" className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xs font-black uppercase tracking-[0.3em] text-[#1A1A1A]">Register New Subject</h1>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <form className="space-y-12">
          
          {/* SECTION: BIOGRAPHICAL */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
              <User size={16} className="text-[#00C7B1]" />
              <h2 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase text-gray-400">Full Name *</label>
                <input type="text" className="w-full border-b-2 border-gray-100 py-3 text-lg font-medium outline-none focus:border-[#00C7B1] transition-all" placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase text-gray-400">Date of Birth *</label>
                <input type="date" className="w-full border-b-2 border-gray-100 py-3 text-lg font-medium outline-none focus:border-[#00C7B1] transition-all" />
              </div>
            </div>
          </section>

          {/* SECTION: IDENTIFICATION */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
              <Fingerprint size={16} className="text-[#00C7B1]" />
              <h2 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Identification Data</h2>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase text-gray-400">Government ID / Aadhar Number *</label>
              <input type="text" className="w-full border-b-2 border-gray-100 py-3 text-lg font-medium outline-none focus:border-[#00C7B1] transition-all" placeholder="XXXX XXXX XXXX" />
            </div>
          </section>

          {/* SECTION: CONTACT */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
              <Phone size={16} className="text-[#00C7B1]" />
              <h2 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Field Logistics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase text-gray-400">Mobile Contact *</label>
                <input type="tel" className="w-full border-b-2 border-gray-100 py-3 text-lg font-medium outline-none focus:border-[#00C7B1] transition-all" placeholder="+91" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase text-gray-400">Village/Block *</label>
                <input type="text" className="w-full border-b-2 border-gray-100 py-3 text-lg font-medium outline-none focus:border-[#00C7B1] transition-all" placeholder="Select Location" />
              </div>
            </div>
          </section>

          {/* SUBMIT */}
          <button className="w-full py-6 bg-[#1A1A1A] text-white font-black uppercase text-xs tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#00C7B1] transition-all">
            <Save size={18} /> Initialize Record
          </button>
        </form>
      </main>
    </div>
  );
}