"use client";
import React, { useState } from 'react';
import { 
  LayoutDashboard, Camera, Users, Database, 
  Bell, Search, LogOut, Menu, X,
  AlertCircle 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function WorkerPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Field Console', icon: LayoutDashboard, href: '/worker' },
    { name: 'New Scan', icon: Camera, href: '/worker/scan' },
    { name: 'Assignment Log', icon: Users, href: '/worker/patients' },
    { name: 'Offline Sync', icon: Database, href: '/worker/sync' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#1A1A1A] flex overflow-x-hidden">
      
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR - Field Ops Style */}
      <aside className={`
        fixed left-0 top-0 h-full w-72 bg-[#1A1A1A] flex flex-col p-8 z-[70] 
        rounded-r-[3rem] shadow-2xl transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between mb-16 px-2">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-[#00C7B1] tracking-tighter">
              REnalyse<span className="text-white">.</span>
            </div>
            {/* BETA TAG */}
            <span className="text-[8px] bg-[#00C7B1]/20 text-[#00C7B1] px-2 py-0.5 rounded-full w-fit font-black tracking-widest mt-1">
              BETA: FIELD OPS
            </span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/50 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={() => setIsSidebarOpen(false)}>
                <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  isActive ? 'bg-[#00C7B1] text-white shadow-lg shadow-[#00C7B1]/20' : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}>
                  <item.icon size={18} /> {item.name}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* WORKER PROFILE SECTION */}
        <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white/20 flex items-center justify-center font-bold text-white text-xs">
                HW
             </div>
             <div className="overflow-hidden">
                <p className="text-xs font-bold text-white uppercase tracking-wider truncate">Field Unit 09</p>
                <p className="text-[9px] text-white/40 font-medium tracking-widest truncate">Raipur North</p>
             </div>
          </div>
          <button className="w-full py-3 bg-white/5 hover:bg-red-500/20 text-red-400 transition-all rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <LogOut size={14} /> End Session
          </button>
        </div>
      </aside>

      {/* TOP HEADER & CONTENT */}
      <main className="flex-1 lg:pl-72 w-full transition-all duration-300">
        <header className="h-24 px-6 lg:px-12 flex items-center justify-between sticky top-0 bg-[#F8F9FC]/80 backdrop-blur-md z-40">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-3 bg-white border border-gray-100 rounded-2xl lg:hidden text-[#1A1A1A] shadow-sm active:scale-95 transition-transform"
              >
                <Menu size={20} />
              </button>
              
              <div className="hidden sm:flex items-center gap-3 bg-white border border-gray-100 px-5 py-2.5 rounded-2xl shadow-sm">
                <div className="w-2 h-2 bg-[#00C7B1] rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Field Unit: Online</span>
              </div>
           </div>

           <div className="flex items-center gap-3 sm:gap-4">
              <button className="p-3 bg-white rounded-2xl border border-gray-100 relative text-[#1A1A1A] hover:bg-gray-50 transition-all shadow-sm">
                 <Bell size={20} />
                 <span className="absolute top-3 right-3 w-2 h-2 bg-orange-500 rounded-full border-2 border-white" />
              </button>
              <div className="w-10 h-10 lg:hidden rounded-2xl bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-xs">
                HW
              </div>
           </div>
        </header>

        {/* CONTENT AREA */}
        <section className="px-6 lg:px-12 pb-12">
          {/* DEVELOPMENT STATUS BANNER */}
          <div className="mb-8 p-4 bg-[#00C7B1]/5 border border-[#00C7B1]/20 rounded-[2rem] flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="p-2 bg-[#00C7B1] text-white rounded-xl shadow-lg shadow-[#00C7B1]/20">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#00C7B1]">Field Console Preview</p>
              <p className="text-xs text-[#1A1A1A]/70 font-medium leading-relaxed">
                The Field Worker Terminal is currently under <span className="font-bold">active development</span>. Offline synchronization and formal reporting tools will be ready soon.
              </p>
            </div>
          </div>

          {children}
        </section>
      </main>
    </div>
  );
}