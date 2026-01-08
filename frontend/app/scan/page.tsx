"use client";

import React, { useState, useRef } from 'react';
import { 
  Camera, Upload, Activity, MapPin, 
  ChevronRight, ClipboardList, Loader2, 
  RotateCcw, Info, FlaskConical, ShieldAlert, 
  CheckCircle2, AlertTriangle, Beaker, HeartPulse,
  HelpCircle, Pill, History, FileText, ChevronLeft, X
} from 'lucide-react';

/**
 * REnalyse DATA ENGINE
 * Direct mapping of questions and "Why" logic from PDF documentation.
 */
const QUESTION_LOGIC = {
  albumin: {
    1: { // Level 1: Trace (30-50 mg/L)
      questions: [
        { id: 'frothy', q: "Have you noticed frothy urine, especially in the morning?", options: ["No", "Slight froth", "Persistent foam (30s+)", "Heavy foam"], why: "Frothiness is pathognomonic for proteinuria. Correlates with trace albumin loss." },
        { id: 'swelling', q: "Do you have swelling in your face, hands, or feet?", options: ["No swelling", "Mild puffiness", "Noticeable swelling", "Significant swelling"], why: "Albumin loss leads to fluid retention. Critical indicator." },
        { id: 'meds', q: "Are you taking any of these medications?", options: ["None", "Ibuprofen/NSAIDs", "ACE Inhibitors/ARBs", "Diuretics"], why: "NSAIDs are nephrotoxic (harmful). ACE-I/ARBs affect creatinine handling but are protective." },
        { id: 'weight', q: "Any recent weight gain without dieting?", options: ["No change", "Gained 1-2 kg", "Gained 3-5 kg", "Gained >5 kg"], why: "Weight gain >1 kg/week suggests active proteinuria and fluid overload." }
      ]
    }
  }
};

const MOCK_PAST_REPORTS = [
  { date: "Dec 12, 2025", alb: "Negative", cr: "78 mg/dL", risk: "Low" },
  { date: "Nov 05, 2025", alb: "Trace", cr: "82 mg/dL", risk: "Borderline" },
];

export default function REnalyseFullProtocol() {
  // Navigation State
  const [view, setView] = useState<'scan' | 'prediction' | 'past_reports' | 'result'>('scan');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeWhy, setActiveWhy] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  // Clinical State
  const [predictedAlb, setPredictedAlb] = useState("45 mg/L (Trace)"); 
  const [predictedCr, setPredictedCr] = useState("95 mg/dL (Normal)");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- CAMERA HANDLERS ---
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" }, 
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setShowCamera(true);
    } catch (err) {
      alert("Camera permission denied or device not supported.");
      console.error(err);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0);
      
      // Stop the stream
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      
      setShowCamera(false);
      setIsProcessing(true);
      
      // Simulate Vision AI analyzing the image
      setTimeout(() => {
        setView('prediction');
        setIsProcessing(false);
      }, 2000);
    }
  };

  const handleLocationRequest = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => setLocation(pos.coords));
    }
  };

  const calculateRisk = () => {
    let score = 3; 
    let status = "BORDERLINE";
    if (answers['meds'] === "Ibuprofen/NSAIDs") { score += 3; status = "ESCALATED (DRUG RISK)"; }
    if (answers['frothy'] === "Heavy foam" || answers['weight'] === "Gained >5 kg") { score += 2; status = "HIGH RISK (SYMPTOMATIC)"; }
    return { score, status };
  };

  // --- SUB-COMPONENTS ---

  const ScanPage = () => (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">Vision AI</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Protocol V1.2.0</p>
        </div>
        <button onClick={() => setView('past_reports')} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-[10px] font-black uppercase border border-white/10 hover:bg-white/10">
          <History size={14} /> History
        </button>
      </div>

      <div className="aspect-[4/5] bg-white/5 border-2 border-dashed border-white/20 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden">
        {!showCamera ? (
          <>
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <Camera size={48} className="text-gray-700 mb-6" />
            <div className="flex flex-col gap-3 w-full px-12 z-10">
              <button onClick={startCamera} className="bg-white text-black py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform">
                Open Camera
              </button>
              <button onClick={() => fileInputRef.current?.click()} className="bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white/10">
                <Upload size={14} className="inline mr-2" /> Gallery
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={() => setView('prediction')} />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-black">
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border-2 border-white/40 rounded-3xl" />
                <p className="text-white/60 text-[10px] font-black uppercase mt-4 tracking-widest">Align Whatman Pad</p>
            </div>
            <div className="absolute bottom-8 left-0 w-full flex justify-center items-center gap-8">
                <button onClick={() => setShowCamera(false)} className="p-4 bg-white/10 rounded-full text-white"><X size={20}/></button>
                <button onClick={capturePhoto} className="w-20 h-20 bg-white rounded-full border-8 border-white/20 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white border-2 border-black rounded-full" />
                </button>
                <div className="w-10" />
            </div>
          </div>
        )}
        
        {isProcessing && (
           <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
              <Loader2 className="animate-spin text-blue-500 mb-4" size={40} />
              <p className="font-black italic text-xs tracking-[0.3em] uppercase">Processing Matrix...</p>
           </div>
        )}
      </div>

      <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <ShieldAlert size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Patient Safety</span>
        </div>
        <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed">
          Ensure Whatman pad is placed on a flat, neutral surface for accurate RGB spectral analysis.
        </p>
      </div>
    </div>
  );

  const PredictionPage = () => {
    const questions = QUESTION_LOGIC.albumin[1].questions;

    return (
      <div className="space-y-6 animate-in slide-in-from-right-8 duration-500 pb-12">
        {/* COMBINED HARDWARE RESULTS */}
        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-[2.5rem] flex flex-col gap-4">
          <div className="flex items-center gap-3">
             <Beaker className="text-blue-500" size={24} />
             <h4 className="text-[10px] font-black uppercase text-blue-500 tracking-tighter">Diagnostic Concentrations</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[9px] font-black uppercase text-gray-500 mb-1">Albumin</p>
                <p className="text-sm font-black italic">{predictedAlb}</p>
             </div>
             <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[9px] font-black uppercase text-gray-500 mb-1">Creatinine</p>
                <p className="text-sm font-black italic">{predictedCr}</p>
             </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] space-y-10">
          <h3 className="text-xl font-black italic flex items-center gap-2">
            <ClipboardList className="text-blue-500" /> Smart Router
          </h3>

          <div className="space-y-8">
            {questions.map((q) => (
              <div key={q.id} className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-black uppercase text-gray-300 leading-snug">{q.q}</label>
                  <button onClick={() => setActiveWhy(activeWhy === q.id ? null : q.id)} className="text-blue-500">
                    <HelpCircle size={18} />
                  </button>
                </div>
                {activeWhy === q.id && (
                  <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl text-[10px] font-bold text-blue-300 uppercase leading-relaxed">
                    Note: {q.why}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-2">
                  {q.options.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => setAnswers({...answers, [q.id]: opt})}
                      className={`p-4 rounded-xl text-left text-[11px] font-bold border transition-all ${answers[q.id] === opt ? 'bg-blue-600 border-blue-400' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-white/10 space-y-4">
              <label className="text-[11px] font-black uppercase text-gray-400 leading-snug">Sync Geolocation Context</label>
              <button 
                onClick={handleLocationRequest}
                className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 transition-all ${location ? 'bg-green-500/20 text-green-400 border border-green-500/20' : 'bg-white/5 text-white'}`}
              >
                {location ? <><CheckCircle2 size={16} /> Location Locked</> : <><MapPin size={16} /> Enable Tracking</>}
              </button>
            </div>
          </div>
        </div>

        <button 
          disabled={Object.keys(answers).length < 3 || !location}
          onClick={() => { setIsProcessing(true); setTimeout(() => { setView('result'); setIsProcessing(false); }, 1500); }}
          className="w-full bg-white text-black p-6 rounded-[2.5rem] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-20"
        >
          {isProcessing ? <Loader2 className="animate-spin" /> : "Verify Result"}
        </button>
      </div>
    );
  };

  const HistoryPage = () => (
    <div className="space-y-6 animate-in slide-in-from-left-8 duration-500">
      <button onClick={() => setView('scan')} className="flex items-center gap-2 text-gray-500 font-black uppercase text-[10px] tracking-widest mb-4">
        <ChevronLeft size={16} /> Back to Scan
      </button>
      <h2 className="text-4xl font-black italic tracking-tighter uppercase">Past Reports</h2>
      <div className="space-y-4">
        {MOCK_PAST_REPORTS.map((report, i) => (
          <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-[2rem] flex justify-between items-center group hover:border-blue-500/30">
            <div>
              <p className="text-[10px] font-black text-blue-500 uppercase mb-1">{report.date}</p>
              <h4 className="text-xl font-black italic tracking-tighter uppercase">Albumin: {report.alb}</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase">Creatinine: {report.cr}</p>
            </div>
            <div className="text-right">
              <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${report.risk === 'Low' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                {report.risk} Risk
              </span>
              <FileText className="mt-4 ml-auto text-gray-700 group-hover:text-white" size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ResultPage = () => {
    const risk = calculateRisk();
    return (
      <div className="space-y-6 animate-in zoom-in-95 duration-1000">
        <div className={`p-10 rounded-[4rem] border-2 shadow-2xl relative overflow-hidden transition-all duration-700 ${risk.score >= 6 ? 'bg-red-500/5 border-red-500/30' : 'bg-blue-500/5 border-blue-500/20'}`}>
          <div className="flex items-center justify-between mb-8">
            <ShieldAlert className={risk.score >= 6 ? 'text-red-500' : 'text-blue-500'} size={24} />
            <div className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest">E2B(R3) Protocol</div>
          </div>

          <h2 className="text-5xl font-black tracking-tighter italic mb-4 leading-none uppercase">{risk.status}</h2>
          
          <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-8 mb-8">
            <div>
              <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Severity</p>
              <p className="text-5xl font-black italic">{risk.score}/10</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Clinic Visit</p>
              <p className="text-2xl font-black italic uppercase">{risk.score >= 6 ? 'Urgent' : 'Routine'}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Guidance</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[11px] font-bold uppercase">
                <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" /> 
                {risk.score >= 6 ? "Avoid NSAIDs like Ibuprofen" : "Monitor weekly for stability"}
              </li>
              <li className="flex items-start gap-2 text-[11px] font-bold uppercase">
                <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" /> 
                Limit sodium intake to {" < "} 2300mg
              </li>
            </ul>
          </div>
        </div>

        <button onClick={() => setView('scan')} className="w-full py-6 rounded-[2.5rem] border border-white/5 text-gray-600 font-black uppercase text-[10px] tracking-[0.5em] hover:text-white transition-all">
          New Analysis <RotateCcw size={14} className="inline ml-2" />
        </button>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12 selection:bg-blue-500/30">
      <div className="max-w-xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black italic shadow-lg shadow-blue-500/20">R</div>
            <span className="font-black italic text-xl tracking-tighter uppercase">RE.nalyse</span>
          </div>
          <HeartPulse className="text-blue-500 animate-pulse" size={20} />
        </header>

        {view === 'scan' && <ScanPage />}
        {view === 'prediction' && <PredictionPage />}
        {view === 'past_reports' && <HistoryPage />}
        {view === 'result' && <ResultPage />}
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </main>
  );
}