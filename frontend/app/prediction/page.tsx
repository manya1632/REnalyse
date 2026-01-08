"use client";

import React, { useState, useEffect } from 'react';
import { 
  ScanQrCode, MapPin, Activity, 
  AlertCircle, CheckCircle2, Loader2, 
  ChevronRight, ClipboardList, Info
} from 'lucide-react';

export default function PredictionPage() {
  const [step, setStep] = useState(1); 
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  
  // Simulated Prediction Data
  const [prediction, setPrediction] = useState({
    conclusion: "Moderate Risk (Stage 2 CKD Indicator)",
    confidence: 94.2,
    errorRate: 2.8,
    geographicContext: "Detected high-salinity water zone"
  });

  // Function to trigger Browser Location Popup
  const requestLocation = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setIsLocating(false);
        },
        () => setIsLocating(false)
      );
    }
  };

  // Simulate QR Scan Completion
  const simulateScan = () => setStep(2);

  // Simulate AI Processing
  const runPrediction = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    setTimeout(() => setStep(4), 3000); // 3-second "AI Analysis" simulation
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] p-4 md:p-8 font-sans">
      <div className="max-w-xl mx-auto">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2563eb]">Neural Diagnostics</p>
            <h1 className="text-2xl font-black tracking-tighter italic">RE.nalyse AI</h1>
          </div>
          <div className="px-4 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-black uppercase">
            Step {step} of 4
          </div>
        </div>

        {/* Step 1: QR & Location */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-xl font-black mb-2 tracking-tight">Initiate Scan Protocol</h2>
              <p className="text-gray-500 text-sm mb-6 font-medium">Please allow location access and scan the QR on your Whatman-matrix card.</p>
              
              <button 
                onClick={requestLocation}
                className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all mb-4 ${
                  location ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">
                    {location ? `Location Locked: ${location.lat.toFixed(2)}, ${location.lng.toFixed(2)}` : 'Request Geolocation'}
                  </span>
                </div>
                {location ? <CheckCircle2 size={18} /> : isLocating ? <Loader2 size={18} className="animate-spin" /> : <ChevronRight size={18} />}
              </button>

              <div className="relative group cursor-pointer" onClick={simulateScan}>
                <div className="aspect-square bg-[#1a1a1a] rounded-[2rem] flex flex-col items-center justify-center text-white overflow-hidden relative">
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
                   <ScanQrCode size={64} className="mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Position card in frame</p>
                   {/* Animated Scanning Line */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_15px_blue] animate-bounce mt-20" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase shadow-xl">
                  Simulate Scan Click
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Clinical Form (Based on PDF questions) */}
        {step === 2 && (
          <form onSubmit={runPrediction} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <ClipboardList className="text-blue-600" />
                <h2 className="text-xl font-black tracking-tight">Clinical Correlation</h2>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Current Blood Pressure (Systolic)</label>
                  <input type="number" placeholder="e.g. 120" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500/20 transition-all" required />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Diabetes Status</label>
                  <select className="w-full p-4 bg-gray-50 rounded-2xl border-none appearance-none">
                    <option>Non-Diabetic</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Gestational</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Family History of Renal Failure?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Unsure'].map((opt) => (
                      <label key={opt} className="flex-1 p-3 bg-gray-50 rounded-xl text-center text-xs font-black uppercase cursor-pointer hover:bg-gray-100 transition-colors">
                        <input type="radio" name="history" className="hidden" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-3">
                  <Info className="text-blue-600 shrink-0" size={18} />
                  <p className="text-[10px] leading-relaxed font-medium text-blue-900 uppercase">
                    Our multimodal model combines these answers with your card's colorimetric analysis and local environmental data.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-[#1a1a1a] text-white p-6 rounded-[2rem] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-blue-600 transition-all">
              Execute AI Analysis
            </button>
          </form>
        )}

        {/* Step 3: Processing (Multimodal AI) */}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <div className="relative mb-8">
               <Loader2 size={80} className="text-blue-600 animate-spin" />
               <Activity className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600" size={30} />
            </div>
            <h2 className="text-xl font-black tracking-tighter">Syncing Multimodal Data</h2>
            <p className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2 text-center max-w-[200px]">
              Correlating Geolocation, QR Matrix, and Clinical Inputs...
            </p>
          </div>
        )}

        {/* Step 4: Final Result */}
        {step === 4 && (
          <div className="space-y-6 animate-in zoom-in-95 duration-700">
            <div className="bg-[#1a1a1a] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
               {/* Decorative Gradient Overlay */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-20 -mt-20" />
               
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-8">
                   <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Diagnostic Verdict</p>
                 </div>

                 <h2 className="text-4xl font-black leading-tight tracking-tighter mb-4 italic">
                   {prediction.conclusion}
                 </h2>

                 <div className="grid grid-cols-2 gap-4 mt-10">
                   <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                     <p className="text-[10px] uppercase text-gray-500 font-black mb-1">Confidence</p>
                     <p className="text-2xl font-black italic">{prediction.confidence}%</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                     <p className="text-[10px] uppercase text-gray-500 font-black mb-1">Error Margin</p>
                     <p className="text-2xl font-black italic">$\pm {prediction.errorRate}$%</p>
                   </div>
                 </div>

                 <div className="mt-6 flex items-start gap-3 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                   <AlertCircle className="text-orange-500 shrink-0" size={18} />
                   <p className="text-[10px] font-bold text-orange-200 leading-normal uppercase">
                     Environmental Risk: {prediction.geographicContext}. Geographic data suggests local mineral anomalies affecting hydration metrics.
                   </p>
                 </div>
               </div>
            </div>

            <button 
              onClick={() => setStep(1)}
              className="w-full p-6 border-2 border-gray-100 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-colors"
            >
              Perform New Analysis
            </button>
          </div>
        )}

      </div>
    </main>
  );
}