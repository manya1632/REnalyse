"use client"
import React, { useState } from 'react';
import { Send, Shield, Stethoscope, Paperclip, MoreHorizontal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PatientMessages() {
  const [message, setMessage] = useState("");

  const chatHistory = [
    {
      id: 1,
      sender: 'doctor',
      name: 'Dr. Himanshu Sahu',
      text: "I've reviewed your uACR scan from this morning. The creatinine levels are showing a slight improvement.",
      time: "09:45 AM"
    },
    {
      id: 2,
      sender: 'doctor',
      name: 'Dr. Himanshu Sahu',
      text: "Please ensure you are maintaining the 2L water intake protocol we discussed. Let's scan again in 48 hours.",
      time: "09:46 AM"
    },
    {
      id: 3,
      sender: 'patient',
      name: 'John Doe',
      text: "Understood, Doctor. I've felt much better since starting the new hydration cycle.",
      time: "10:02 AM"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-180px)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* CHAT HEADER */}
      <div className="bg-white border border-gray-100 rounded-t-[2.5rem] p-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/patient" className="lg:hidden p-2 text-gray-400"><ArrowLeft size={20}/></Link>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00C7B1] to-[#009EA9] flex items-center justify-center text-white font-bold">HS</div>
          <div>
            <h3 className="font-bold text-[#0F1B4C] text-sm">Dr. Himanshu Sahu</h3>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00C7B1] rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Active • Renal Unit</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-[#F8F9FC] px-4 py-2 rounded-xl border border-gray-100">
            <Shield size={14} className="text-[#00C7B1]" />
            <span className="text-[9px] font-bold text-[#0F1B4C] uppercase tracking-widest">End-to-End Encrypted</span>
          </div>
          <button className="p-2 text-gray-300 hover:text-[#0F1B4C]"><MoreHorizontal /></button>
        </div>
      </div>

      {/* MESSAGES AREA */}
      <div className="flex-1 bg-white/50 backdrop-blur-sm border-x border-gray-100 overflow-y-auto p-8 space-y-8">
        {chatHistory.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${msg.sender === 'patient' ? 'items-end' : 'items-start'} flex flex-col`}>
              <div className={`p-5 rounded-[2rem] text-sm leading-relaxed shadow-sm ${
                msg.sender === 'patient' 
                ? 'bg-[#0F1B4C] text-white rounded-tr-none' 
                : 'bg-white text-[#0F1B4C] border border-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
              <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mt-2 px-2">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT AREA */}
      <div className="bg-white border border-gray-100 rounded-b-[2.5rem] p-6 shadow-lg">
        <div className="flex items-center gap-4 bg-[#F8F9FC] border border-gray-100 rounded-2xl px-6 py-2 focus-within:ring-2 ring-[#00C7B1]/20 transition-all">
          <button className="text-gray-400 hover:text-[#00C7B1] transition-colors"><Paperclip size={20} /></button>
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your health update..." 
            className="flex-1 bg-transparent py-3 text-sm outline-none font-medium"
          />
          <button className="bg-[#00C7B1] text-white p-2.5 rounded-xl hover:bg-[#009EA9] transition-all shadow-lg shadow-[#00C7B1]/20">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}