"use client"
import { FileText, Download, ShieldCheck, Filter } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { id: 'RPT-901', patient: 'Amitav Ghosh', date: '04 Jan 2026', type: 'uACR Analysis', size: '1.2 MB' },
    { id: 'RPT-882', patient: 'Priya Sharma', date: '01 Jan 2026', type: 'Biochemical Export', size: '2.4 MB' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">Clinical <span className="text-[#00C7B1]">Reports.</span></h1>
          <p className="text-[#6B7280] text-sm font-medium uppercase tracking-widest mt-1">Certified PDF Exports & Logs</p>
        </div>
        <button className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
           <Filter size={16} /> Filter by Date
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((rpt) => (
          <div key={rpt.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl hover:shadow-[#0F1B4C]/5 transition-all group">
            <div className="w-14 h-14 bg-[#F8F9FC] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00C7B1] group-hover:text-white transition-all text-[#00C7B1]">
              <FileText size={24} />
            </div>
            <h4 className="text-lg font-bold mb-1">{rpt.patient}</h4>
            <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest mb-6">{rpt.type} • {rpt.date}</p>
            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
               <span className="text-[10px] font-bold text-gray-300">{rpt.size}</span>
               <button className="flex items-center gap-2 text-[#00C7B1] font-bold text-xs uppercase tracking-widest hover:text-[#0F1B4C] transition-colors">
                 <Download size={14} /> Download
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}