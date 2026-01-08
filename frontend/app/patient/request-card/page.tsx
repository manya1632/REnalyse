"use client"
import React, { useState } from 'react';
import { 
  CreditCard, Package, Truck, MapPin, 
  ShieldCheck, ArrowRight, Plus, Minus, 
  Info, Phone, AlertCircle, Bookmark
} from 'lucide-react';
import Link from 'next/link';

export default function RequestCardPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-[10px] font-black tracking-[0.4em] text-[#00C7B1] uppercase mb-2">Inventory Access</p>
          <h1 className="text-5xl font-light tracking-tight text-[#0F1B4C]">
            Request <span className="font-medium">Diagnostic Kit</span>
          </h1>
        </div>
        <Link href="/patient/track-order">
          <button className="flex items-center gap-3 bg-white border border-gray-100 px-6 py-4 rounded-[1.5rem] shadow-sm hover:border-[#00C7B1] transition-all group">
            <Package size={18} className="text-[#00C7B1]" />
            <span className="text-xs font-bold text-[#0F1B4C]">Track Existing Orders</span>
            <ArrowRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start pb-20">
        
        {/* LEFT: PRODUCT PREVIEW & SPECS */}
        <div className="lg:col-span-6 space-y-8">
          <div className="bg-[#0F1B4C] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#00C7B1]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-40 h-60 bg-white rounded-2xl shadow-2xl flex flex-col p-5 border-t-8 border-[#00C7B1] mb-8 transform hover:rotate-2 transition-transform duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[7px] font-black text-[#0F1B4C] leading-none uppercase tracking-tighter text-left">RE.<br/>nalyse</div>
                  <ShieldCheck size={14} className="text-[#00C7B1]" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-full bg-gray-50 rounded border border-gray-100" />
                  <div className="h-5 w-full bg-gray-50 rounded border border-gray-100" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">REnalyse Whatman Matrix Card</h3>
              <p className="text-blue-100/40 text-xs leading-relaxed max-w-xs">
                Sterilized cellulose pads for Albumin-to-Creatinine Ratio (uACR) monitoring.
              </p>
            </div>
          </div>

          {/* CLINICAL NOTICE */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] p-6 flex gap-4">
             <div className="text-blue-500 mt-1"><Info size={20}/></div>
             <p className="text-xs text-blue-800/70 leading-relaxed">
               <strong>Note:</strong> These cards are single-use medical devices. Ensure they are kept in a dry, cool environment until the time of the picrate reaction test.
             </p>
          </div>
        </div>

        {/* RIGHT: DETAILED ORDER FORM */}
        <div className="lg:col-span-6">
          <div className="bg-white border border-gray-100 rounded-[3rem] p-10 shadow-sm">
            <h4 className="text-xl font-bold text-[#0F1B4C] mb-8">Clinical Shipment Details</h4>
            
            <form className="space-y-6">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between p-4 bg-[#F8F9FC] rounded-2xl">
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-[#0F1B4C] uppercase tracking-widest">Quantity *</span>
                   <span className="text-[9px] text-gray-400 font-bold uppercase">Standard Pack of 1</span>
                </div>
                <div className="flex items-center gap-6">
                  <button type="button" onClick={() => quantity > 1 && setQuantity(quantity-1)} className="p-2 bg-white rounded-lg hover:text-[#00C7B1] transition-colors shadow-sm">
                    <Minus size={14} />
                  </button>
                  <span className="font-bold text-lg text-[#0F1B4C]">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity+1)} className="p-2 bg-white rounded-lg hover:text-[#00C7B1] transition-colors shadow-sm">
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                     <Phone size={12} /> Contact Number *
                   </label>
                </div>
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX-XXXXX"
                  className="w-full bg-[#F8F9FC] border border-gray-100 rounded-2xl p-4 text-sm outline-none focus:ring-2 ring-[#00C7B1]/20 transition-all"
                  required
                />
              </div>

              {/* Delivery Address */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <MapPin size={12} /> Delivery Address *
                </label>
                <textarea 
                  placeholder="Apartment/House, Street, City, State, Pincode..."
                  className="w-full bg-[#F8F9FC] border border-gray-100 rounded-2xl p-4 text-sm outline-none focus:ring-2 ring-[#00C7B1]/20 transition-all h-28 resize-none"
                  required
                />
              </div>

              {/* Reason / Purpose */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Bookmark size={12} /> Purpose of Request
                </label>
                <select className="w-full bg-[#F8F9FC] border border-gray-100 rounded-2xl p-4 text-sm outline-none focus:ring-2 ring-[#00C7B1]/20 appearance-none">
                  <option>Routine CKD Monitoring</option>
                  <option>Post-Operative Recovery</option>
                  <option>Doctor-Advised Scan</option>
                  <option>Refill for Home Kit</option>
                </select>
              </div>

              {/* Priority Toggle */}
              <div className="flex items-center justify-between p-4 bg-[#FFF1F1] border border-red-50 rounded-2xl">
                 <div className="flex items-center gap-3">
                    <AlertCircle size={18} className="text-red-500" />
                    <div>
                       <p className="text-[10px] font-black text-red-900 uppercase tracking-widest">Urgent Priority</p>
                       <p className="text-[9px] text-red-700/60 font-medium">Expedited for critical monitoring</p>
                    </div>
                 </div>
                 <input type="checkbox" className="w-5 h-5 rounded-lg accent-red-500" />
              </div>

              <button type="submit" className="w-full bg-[#00C7B1] text-white py-5 rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#00C7B1]/20 hover:bg-[#009EA9] transition-all flex items-center justify-center gap-3 mt-4">
                Confirm Request <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}