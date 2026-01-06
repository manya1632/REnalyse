"use client"
import React, { useState, use } from 'react';
import { 
  Stethoscope, Send, Download, AlertTriangle, 
  ShieldCheck, History, Pill, MapPin, ArrowLeft,
  Lock, CheckCircle, FileText
} from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CaseReview({ params }: PageProps) {
  const resolvedParams = use(params);
  const patientId = resolvedParams.id;

  // Mock state for patient access (you would fetch this from your DB)
  const [hasAccess, setHasAccess] = useState(true); 
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeDirective, setActiveDirective] = useState('meds');

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate generation of Azure AI Report
    setTimeout(() => {
      setIsDownloading(false);
      alert("FHIR-Compliant Report Generated: REnalyse_Analysis_" + patientId + ".pdf");
    }, 1500);
  };

  return (
    <div className="animate-in slide-in-from-right duration-500">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <div className="flex items-center gap-4">
           <Link href="/doctor/patients" className="p-2 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-all shadow-sm">
              <ArrowLeft size={20} className="text-[#0F1B4C]" />
           </Link>
           <div>
             <h2 className="text-2xl font-bold tracking-tighter">Case <span className="text-[#00C7B1]">Analysis.</span></h2>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Patient Reference: {patientId}</p>
           </div>
         </div>

         <div className="flex items-center gap-3">
            {/* CONDITIONAL DOWNLOAD BUTTON */}
            {hasAccess ? (
              <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-white text-[#0F1B4C] border border-gray-100 px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#F8F9FC] hover:border-[#00C7B1] transition-all shadow-sm group disabled:opacity-50"
              >
                {isDownloading ? (
                  <div className="w-3 h-3 border-2 border-[#00C7B1] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Download size={14} className="group-hover:translate-y-0.5 transition-transform text-[#00C7B1]" />
                )}
                {isDownloading ? "Generating..." : "Download Report"}
              </button>
            ) : (
              <div className="bg-gray-100 text-gray-400 px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-gray-200">
                <Lock size={14} /> Access Locked
              </div>
            )}

            <div className="hidden sm:flex bg-[#0F1B4C] text-white px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest items-center gap-2 shadow-lg shadow-[#0F1B4C]/20">
               <ShieldCheck size={14} className="text-[#00C7B1]" /> {hasAccess ? "Azure Verified" : "Encrypted"}
            </div>
         </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: DATA ACCESS CONTROL & HISTORY */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* ACCESS STATUS CARD */}
          <div className={`p-6 rounded-[2.5rem] border flex items-center justify-between transition-all ${hasAccess ? 'bg-[#00C7B1]/5 border-[#00C7B1]/20' : 'bg-red-50 border-red-100'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${hasAccess ? 'bg-[#00C7B1] text-white' : 'bg-red-500 text-white'}`}>
                {hasAccess ? <CheckCircle size={22} /> : <Lock size={22} />}
              </div>
              <div>
                <h4 className="font-bold text-[#0F1B4C] text-sm">Patient Data Sharing</h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                  {hasAccess ? 'Current access granted via REnalyse Patient App' : 'Access requested but not yet authorized'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setHasAccess(!hasAccess)} 
              className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0F1B4C]/40 hover:text-[#0F1B4C]"
            >
              [Toggle Dev Test]
            </button>
          </div>

          <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm">
             <div className="flex justify-between items-start mb-10">
                <div>
                   <p className="text-[10px] font-black text-[#00C7B1] uppercase tracking-[0.2em] mb-1">Clinical Journey</p>
                   <h3 className="text-3xl font-bold tracking-tight">Diagnostic History</h3>
                </div>
                {hasAccess && <div className="bg-red-50 text-red-500 p-4 rounded-2xl animate-pulse"><AlertTriangle /></div>}
             </div>

             {hasAccess ? (
               <div className="space-y-10 relative before:absolute before:left-[19px] before:top-2 before:bottom-0 before:w-px before:bg-gray-100">
                  <div className="relative pl-14">
                     <div className="absolute left-0 top-0 w-10 h-10 bg-[#0F1B4C] rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-lg">
                        <History size={18}/>
                     </div>
                     <div className="p-6 bg-[#F8F9FC] rounded-3xl border border-gray-100">
                        <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">Today • Jan 06, 2026</span>
                        <h4 className="font-bold text-lg mt-1">uACR Detection: Critical Spike</h4>
                        <p className="text-sm text-[#6B7280] mt-3 leading-relaxed">
                          Janovsky Complex reaction detected abnormal creatinine levels. Azure Vision AI reports a 14% deviation from baseline cellulose matrix.
                        </p>
                     </div>
                  </div>
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center py-12 text-center">
                 <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                    <FileText size={32} />
                 </div>
                 <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Data Obfuscated</p>
                 <p className="text-xs text-gray-300 mt-2 max-w-[200px]">Patient has not shared clinical history with this workstation.</p>
               </div>
             )}
          </div>
        </div>

        {/* RIGHT COLUMN: DIRECTIVE (Always Visible for Doctor to take action) */}
        <div className="lg:col-span-5">
           <div className="bg-[#0F1B4C] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden sticky top-28">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                 <Stethoscope className="text-[#00C7B1]" size={24} /> Clinical Directive
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-8">
                 {[
                   { id: 'meds', label: 'Medication', icon: Pill },
                   { id: 'f2f', label: 'Meeting', icon: MapPin },
                 ].map((t) => (
                    <button 
                      key={t.id}
                      onClick={() => setActiveDirective(t.id)}
                      className={`flex items-center gap-3 p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                        activeDirective === t.id ? 'bg-[#00C7B1] border-[#00C7B1]' : 'bg-white/5 border-white/10 text-white/40'
                      }`}
                    >
                       <t.icon size={16}/> {t.label}
                    </button>
                 ))}
              </div>

              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-sm text-white outline-none focus:ring-2 ring-[#00C7B1] h-48 mb-6 placeholder:text-white/20 font-medium resize-none"
                placeholder="Push clinical advice to patient device..."
              />

              <button className="w-full bg-[#00C7B1] hover:bg-[#009EA9] text-white py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#00C7B1]/20 active:scale-[0.98]">
                 Push to Patient Device <Send size={16} />
              </button>
              
              <p className="text-center text-[9px] font-bold text-white/20 uppercase tracking-widest mt-6">
                 Encryption: FHIR R4 Secure Node
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}