"use client";

import React from 'react';
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import WhyREnalyse from "./components/home/WhyREnalyse";
import { HowItWorksSection } from "./components/home/HowItWorksSection";
import CollaborationCTA from "./components/home/CollaborationCTA";
import Footer from "./components/layout/Footer";
import { ShieldAlert, RefreshCw, FileCheck, Pill } from 'lucide-react';
import TargetUsersSection from './components/home/TargetUsersSection';
import TestimonialSection from './components/home/TestimonialSection';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden bg-[#050505]">
      <Navbar />
      <HeroSection />

      {/* NEW: THE "WORRY" CHECK (Problem Urgency) */}
      <section className="py-16 px-6 border-y border-white/5 bg-red-500/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-white italic tracking-tighter mb-4 flex items-center gap-3">
              <ShieldAlert className="text-red-500" /> WHY BE WORRIED?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Kidney disease is a "Silent Killer." By the time you feel symptoms, 
              <span className="text-white font-bold"> 60% of function is often already lost.</span> 
              Diabetes and high blood pressure are the leading triggers, but daily medications like NSAIDs (Ibuprofen) 
              can cause irreversible damage without immediate follow-up.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-red-500/20">
            <h4 className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-4">Risk Checklist</h4>
            <ul className="space-y-3 text-xs font-bold text-gray-300 uppercase">
              <li className="flex gap-2"><span>[ ]</span> Foamy/Bubbly Urine</li>
              <li className="flex gap-2"><span>[ ]</span> Persistent Ankle Swelling</li>
              <li className="flex gap-2"><span>[ ]</span> Long-term Painkiller Use</li>
            </ul>
          </div>
        </div>
      </section>

      <WhyREnalyse />
      <TargetUsersSection/>

      {/* NEW: THE FOLLOW-UP ENGINE (Direct PS Fit) */}
      <section className="py-24 px-6 bg-renalyse-dark">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter italic">
            THE FOLLOW-UP ENGINE.
          </h2>
          <p className="text-blue-100 text-xl mt-4 max-w-2xl mx-auto">
            Solving the "Missing Data" crisis in Patient Safety and Pharmacovigilance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <RefreshCw size={32} />,
              title: "Automated Follow-Up",
              desc: "Re-engages high-risk patients every 7-14 days based on AI risk stratification, closing the safety loop."
            },
            {
              icon: <Pill size={32} />,
              title: "Drug-Risk Correlation",
              desc: "Tracks NSAID/ACE-I intake against Creatinine shifts to detect medication-induced kidney injury early."
            },
            {
              icon: <FileCheck size={32} />,
              title: "Regulatory Ready",
              desc: "Generates FHIR-compliant reports ensuring complete data collection for international safety reporting."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] space-y-6">
              <div className="text-blue-600">{item.icon}</div>
              <h3 className="text-2xl font-black text-renalyse-dark">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorksSection />
      <TestimonialSection/>
      <CollaborationCTA />
      <Footer />
    </main>
  );
}