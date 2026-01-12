"use client"
import React, { useState } from 'react';
import { 
  Users, FileText, MessageCircle, Settings, 
  LayoutDashboard, Bell, Search, LogOut, Menu, X,
  AlertCircle // Added for the development notice
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DoctorPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/doctor' },
    { name: 'My Patients', icon: Users, href: '/doctor/patients' },
    { name: 'Reports', icon: FileText, href: '/doctor/reports' },
    { name: 'Messages', icon: MessageCircle, href: '/doctor/messages' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#0F1B4C] flex overflow-x-hidden">
      
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed left-0 top-0 h-full w-72 bg-[#0F1B4C] flex flex-col p-8 z-[70] 
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
              BETA PHASE
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

        <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00C7B1] to-[#009EA9] border-2 border-white/20" />
             <div className="overflow-hidden">
                <p className="text-xs font-bold text-white uppercase tracking-wider truncate">Dr. Sahu</p>
                <p className="text-[9px] text-white/40 font-medium tracking-widest truncate">NIT RAIPUR</p>
             </div>
          </div>
          <button className="w-full py-3 bg-white/5 hover:bg-red-500/20 text-red-400 transition-all rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* TOP HEADER & CONTENT */}
      <main className="flex-1 lg:pl-72 w-full transition-all duration-300">
        <header className="h-24 px-6 lg:px-12 flex items-center justify-between sticky top-0 bg-[#F8F9FC]/80 backdrop-blur-md z-40">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-3 bg-white border border-gray-100 rounded-2xl lg:hidden text-[#0F1B4C] shadow-sm active:scale-95 transition-transform"
              >
                <Menu size={20} />
              </button>
              
              <div className="relative hidden sm:block w-64 xl:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search Patient ID..." 
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-semibold focus:ring-2 ring-[#00C7B1]/20 outline-none transition-all shadow-sm"
                />
              </div>
           </div>

           <div className="flex items-center gap-3 sm:gap-4">
              <button className="p-3 bg-white rounded-2xl border border-gray-100 relative text-[#0F1B4C] hover:bg-gray-50 transition-all shadow-sm">
                 <Bell size={20} />
                 <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="w-10 h-10 lg:hidden rounded-2xl bg-gradient-to-tr from-[#00C7B1] to-[#009EA9]" />
           </div>
        </header>

        <section className="px-6 lg:px-12 pb-12">
          {/* DEVELOPMENT NOTICE BANNER */}
          <div className="mb-8 p-4 bg-[#00C7B1]/5 border border-[#00C7B1]/20 rounded-[2rem] flex items-center gap-4">
            <div className="p-2 bg-[#00C7B1] text-white rounded-xl">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#00C7B1]">System Status</p>
              <p className="text-xs text-[#0F1B4C]/70 font-medium">
                The REnalyse platform is currently under <span className="font-bold">active development</span>. Clinical tools will be ready soon formally.
              </p>
            </div>
          </div>

          {children}
        </section>
      </main>
    </div>
  );
}