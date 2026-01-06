"use client"
import { Search, Send, CheckCheck } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="animate-in fade-in duration-500 h-[calc(100vh-180px)] flex gap-6">
      {/* Sidebar List */}
      <div className="w-80 bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-gray-50">
          <h3 className="font-bold text-sm mb-4">Inbound Consults</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
            <input className="w-full bg-[#F8F9FC] pl-9 pr-4 py-2 rounded-xl text-xs outline-none" placeholder="Search chats..." />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
          {['Amitav Ghosh', 'Priya Sharma'].map((name, i) => (
            <div key={i} className={`p-6 flex gap-4 cursor-pointer hover:bg-[#F8F9FC] transition-colors ${i === 0 ? 'bg-[#F8F9FC]' : ''}`}>
              <div className="w-10 h-10 bg-[#00C7B1] rounded-full flex-shrink-0" />
              <div className="overflow-hidden">
                <p className="font-bold text-xs text-[#0F1B4C] truncate">{name}</p>
                <p className="text-[10px] text-gray-400 truncate">RE: Late scan results...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 bg-white rounded-[3rem] border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F8F9FC] rounded-2xl flex items-center justify-center font-bold text-[#00C7B1]">A</div>
              <h4 className="font-bold text-[#0F1B4C]">Amitav Ghosh <span className="text-[10px] text-green-500 block">● Active Now</span></h4>
           </div>
        </div>
        <div className="flex-1 p-8 overflow-y-auto space-y-6">
           <div className="max-w-md bg-[#F8F9FC] p-6 rounded-3xl rounded-tl-none border border-gray-100 text-sm leading-relaxed">
             Doctor, I've completed my morning uACR strip scan. The app says it is waiting for your verification.
           </div>
           <div className="max-w-md bg-[#0F1B4C] text-white p-6 rounded-3xl rounded-tr-none ml-auto text-sm leading-relaxed">
             I see it. The Bromocresol reaction looks stable but the Creatinine value is slightly high. Please stay hydrated and re-scan in 4 hours.
             <div className="flex justify-end mt-2 opacity-30"><CheckCheck size={14} /></div>
           </div>
        </div>
        <div className="p-8 bg-gray-50/50 flex gap-4">
           <input className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-[#00C7B1]/20 text-sm" placeholder="Push clinical advice..." />
           <button className="bg-[#00C7B1] p-4 rounded-2xl text-white shadow-lg shadow-[#00C7B1]/20"><Send size={20} /></button>
        </div>
      </div>
    </div>
  );
}