"use client"
import React from 'react';
import { 
  ArrowLeft, Package, Truck, 
  MapPin, CheckCircle2, Clock 
} from 'lucide-react';
import Link from 'next/link';

export default function TrackOrderPage() {
  const statusSteps = [
    { title: "Request Confirmed", desc: "Jan 07, 10:30 AM", active: true, done: true },
    { title: "Laboratory Processing", desc: "Sterilization in progress", active: true, done: true },
    { title: "In Transit", desc: "Arriving via Clinical Logistics", active: true, done: false },
    { title: "Delivered", desc: "Expected Jan 10", active: false, done: false },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER */}
      <div className="flex items-center gap-6 mb-12">
        <Link href="/patient/request-card" className="p-4 bg-white rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all shadow-sm">
          <ArrowLeft size={20} className="text-[#0F1B4C]" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tighter text-[#0F1B4C]">Track <span className="text-[#00C7B1]">Shipment.</span></h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Order ID: RN-7702-09X</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* ORDER SUMMARY */}
        <div className="md:col-span-1 space-y-6">
           <div className="bg-[#0F1B4C] p-8 rounded-[2.5rem] text-white shadow-xl">
              <Package size={32} className="text-[#00C7B1] mb-6" />
              <h4 className="font-bold text-lg mb-2">Order Summary</h4>
              <p className="text-xs text-blue-100/40 mb-6">REnalyse Whatman Kit<br/>Qty: 05 Cards</p>
              <div className="pt-6 border-t border-white/10">
                 <p className="text-[10px] font-black uppercase tracking-widest text-[#00C7B1]">Destination</p>
                 <p className="text-xs mt-2 text-white/80 leading-relaxed font-medium">NIT Raipur Hostel,<br/>Raipur, Chhattisgarh, 492010</p>
              </div>
           </div>
        </div>

        {/* TRACKING TIMELINE */}
        <div className="md:col-span-2">
           <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
              <div className="space-y-12 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-px before:bg-gray-100">
                 {statusSteps.map((step, idx) => (
                   <div key={idx} className="relative pl-14 flex justify-between items-start">
                      {/* Timeline Dot */}
                      <div className={`absolute left-0 top-0 w-10 h-10 rounded-xl flex items-center justify-center border-4 border-white shadow-sm transition-colors ${
                        step.done ? 'bg-[#00C7B1] text-white' : step.active ? 'bg-[#0F1B4C] text-white animate-pulse' : 'bg-gray-50 text-gray-300'
                      }`}>
                        {step.done ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                      </div>

                      <div>
                        <h4 className={`font-bold text-sm ${step.active ? 'text-[#0F1B4C]' : 'text-gray-300'}`}>{step.title}</h4>
                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-1">{step.desc}</p>
                      </div>

                      {step.done && (
                        <span className="text-[8px] font-black text-[#00C7B1] uppercase tracking-[0.2em]">Verified</span>
                      )}
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}