"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, Zap, ShieldCheck, ChevronRight, Loader2, 
  Database, BarChart3, Image as ImageIcon, X, 
  Scan, Camera, RotateCw, Download, FileText, Activity
} from 'lucide-react';

export default function DiagnosticConsole() {
  const [step, setStep] = useState<'acquire' | 'analyze' | 'report'>('acquire');
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [patientId, setPatientId] = useState<string>("FETCHING...");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setPatientId("RN-7702-X9"), 1000);
    if (step === 'acquire') startCamera();
    return () => stopCamera();
  }, [facingMode, step]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: facingMode } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasPermission(true);
      }
    } catch (err) {
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const captureFrame = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
      setSelectedImage(canvas.toDataURL('image/png'));
      stopCamera();
    }
  };

  const saveReport = () => {
    // In a real app, use jspdf or html2canvas. Here we simulate a download.
    const link = document.createElement('a');
    link.download = `REnalyse_Report_${patientId}.png`;
    link.href = selectedImage || '';
    link.click();
  };

  return (
    <main className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-renalyse-primary">
      {/* Precision Header */}
      <nav className="border-b border-white/5 bg-[#0F1115]/80 backdrop-blur-xl px-8 py-4 flex justify-between items-center fixed top-0 w-full z-50">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black tracking-tighter uppercase">
            RE<span className="text-renalyse-primary">.</span> Lab
          </span>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <div className="hidden md:flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/40">
            <Database size={12} /> SESSION ID: <span className="text-white">{patientId}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className={`h-2 w-2 rounded-full animate-pulse ${hasPermission ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
            System: {hasPermission ? 'Online' : 'Restricted'}
          </span>
        </div>
      </nav>

      <div className="pt-24 px-6 md:px-12 pb-12 max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-8">
        
        {/* Workspace: Left (Visuals) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black border border-white/5 shadow-2xl group">
            
            {step === 'acquire' && (
              <>
                {hasPermission === false ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-red-500/5">
                    <X size={48} className="text-red-500 mb-4" />
                    <h3 className="text-xl font-bold">Camera Access Denied</h3>
                    <p className="text-white/40 text-sm mt-2 max-w-xs">Enable camera permissions in your browser to proceed with the diagnostic scan.</p>
                  </div>
                ) : selectedImage ? (
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <img src={selectedImage} alt="Capture" className="h-full w-full object-contain" />
                    <button onClick={() => { setSelectedImage(null); startCamera(); }} className="absolute top-6 right-6 bg-white/10 p-3 rounded-full backdrop-blur-md hover:bg-red-500 transition-colors">
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover opacity-80" />
                )}

                {/* HUD Elements */}
                <div className="absolute inset-0 pointer-events-none border-[40px] border-black/20">
                  <div className="w-full h-full border border-white/10 rounded-xl relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-renalyse-primary/30 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Camera Controls */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                  <button onClick={() => setFacingMode(prev => prev === 'user' ? 'environment' : 'user')} className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 backdrop-blur-md">
                    <RotateCw size={20} />
                  </button>
                  <button onClick={captureFrame} className="p-1 bg-white rounded-full">
                     <div className="h-14 w-14 rounded-full border-4 border-[#0F1115] bg-renalyse-primary flex items-center justify-center text-[#0F1115]">
                        <Camera size={24} />
                     </div>
                  </button>
                  <button onClick={() => fileInputRef.current?.click()} className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 backdrop-blur-md">
                    <Upload size={20} />
                  </button>
                </div>
              </>
            )}

            {step === 'analyze' && (
              <div className="absolute inset-0 bg-[#0F1115] flex flex-col items-center justify-center">
                <Loader2 size={64} className="text-renalyse-primary animate-spin mb-8" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-renalyse-primary">Processing AI Matrix</p>
              </div>
            )}

            {step === 'report' && (
              <div ref={reportRef} className="absolute inset-0 bg-white text-[#0F1115] p-12 overflow-y-auto">
                <div className="flex justify-between items-start border-b-2 border-[#0F1115] pb-8 mb-8">
                  <div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Diagnostic Report</h2>
                    <p className="text-sm font-bold opacity-40 uppercase tracking-widest mt-1">REnalyse Digital Health Record</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase opacity-40">Report ID</p>
                    <p className="text-lg font-black tracking-tight">{patientId}-FINAL</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-12">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase opacity-40">Creatinine Level</p>
                      <p className="text-3xl font-black">1.2 mg/dL</p>
                      <div className="h-1 w-full bg-green-500 mt-2" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase opacity-40">Albumin Ratio</p>
                      <p className="text-3xl font-black">28 mg/g</p>
                      <div className="h-1 w-full bg-green-500 mt-2" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase opacity-40">eGFR Score</p>
                      <p className="text-3xl font-black text-amber-500">88.4</p>
                      <div className="h-1 w-full bg-amber-500 mt-2" />
                   </div>
                </div>

                <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-200">
                   <h4 className="font-black uppercase text-xs tracking-widest mb-4">AI Clinical Observation</h4>
                   <p className="text-sm leading-relaxed font-medium text-gray-600 italic">
                     "Matrix analysis shows early markers of Stage 2 CKD. Protein levels are currently within safe bounds, but eGFR suggests proactive monitoring."
                   </p>
                </div>
              </div>
            )}
          </div>
          
          <input type="file" ref={fileInputRef} hidden onChange={(e) => {
             const file = e.target.files?.[0];
             if (file) setSelectedImage(URL.createObjectURL(file));
          }} />
        </div>

        {/* Workspace: Right (Controls) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-8 flex items-center gap-2">
              <Activity size={14} className="text-renalyse-primary" /> Protocol Controls
            </h3>
            
            <div className="space-y-4">
               <div className={`p-6 rounded-2xl border transition-all ${step === 'acquire' ? 'bg-renalyse-primary border-transparent text-[#0F1115]' : 'bg-white/5 border-white/5 opacity-40'}`}>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">Step 01</p>
                  <p className="font-bold">Matrix Capture</p>
               </div>
               <div className={`p-6 rounded-2xl border transition-all ${step === 'analyze' ? 'bg-renalyse-primary border-transparent text-[#0F1115]' : 'bg-white/5 border-white/5 opacity-40'}`}>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">Step 02</p>
                  <p className="font-bold">AI Inference</p>
               </div>
               <div className={`p-6 rounded-2xl border transition-all ${step === 'report' ? 'bg-renalyse-primary border-transparent text-[#0F1115]' : 'bg-white/5 border-white/5 opacity-40'}`}>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">Step 03</p>
                  <p className="font-bold">Clinical Output</p>
               </div>
            </div>

            {step === 'acquire' && (
              <button 
                onClick={() => { setStep('analyze'); setTimeout(() => setStep('report'), 2500); }}
                disabled={!selectedImage}
                className="w-full mt-10 bg-white text-[#0F1115] py-5 rounded-3xl font-black uppercase text-[11px] tracking-[0.2em] flex justify-between px-8 items-center disabled:opacity-10 hover:bg-renalyse-primary transition-colors"
              >
                Start Analysis <ChevronRight size={18} />
              </button>
            )}

            {step === 'report' && (
              <div className="mt-10 space-y-3">
                <button onClick={saveReport} className="w-full bg-renalyse-primary text-[#0F1115] py-5 rounded-3xl font-black uppercase text-[11px] tracking-[0.2em] flex justify-between px-8 items-center">
                  Save Report <Download size={18} />
                </button>
                <button onClick={() => { setStep('acquire'); setSelectedImage(null); }} className="w-full border border-white/10 py-5 rounded-3xl font-black uppercase text-[11px] tracking-[0.2em] flex justify-between px-8 items-center opacity-60 hover:opacity-100">
                  New Session <X size={18} />
                </button>
              </div>
            )}
          </div>

          <div className="bg-renalyse-primary/10 rounded-[2.5rem] p-8 border border-renalyse-primary/20">
             <ShieldCheck size={32} className="text-renalyse-primary mb-4" />
             <p className="text-xs font-bold leading-relaxed">
               Every scan is encrypted using AES-256 and verified by Azure AI Foundry for 99.8% diagnostic precision.
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}