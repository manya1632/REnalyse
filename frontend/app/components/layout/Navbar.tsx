"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Who it's For", href: "#targetusers" },
    { name: "Collaboration", href: "#contact" },
  ];

  const dashboardRoles = [
    { name: "Doctor Dashboard", href: "/doctor" },
    { name: "Health Worker", href: "/worker" },
    { name: "Patient Portal", href: "/patient" },
  ];

  return (
    <nav className="w-full py-5 px-6 md:px-12 flex justify-between items-center fixed top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-[#1a1a1a]">
        RE<span className="text-[#2563eb]">.</span>nalyse
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 font-medium text-[#1a1a1a]">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-[#2563eb] transition">
            {link.name}
          </Link>
        ))}

        {/* Dashboard Dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsDashboardOpen(true)}
          onMouseLeave={() => setIsDashboardOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#2563eb] transition py-2">
            Dashboard <ChevronDown size={16} className={`transition-transform ${isDashboardOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDashboardOpen && (
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 animate-in fade-in zoom-in-95 duration-200">
              {dashboardRoles.map((role) => (
                <Link
                  key={role.href}
                  href={role.href}
                  className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#2563eb] transition-colors"
                >
                  {role.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/login" className="bg-[#2563eb] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">
          Portal Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#1a1a1a]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {link.name}
            </Link>
          ))}
          
          <hr className="border-gray-100" />
          
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Dashboards</p>
          <div className="grid grid-cols-1 gap-2">
            {dashboardRoles.map((role) => (
              <Link
                key={role.href}
                href={role.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl font-bold text-[#1a1a1a]"
              >
                <LayoutDashboard size={18} className="text-[#2563eb]" />
                {role.name}
              </Link>
            ))}
          </div>

          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)}
            className="bg-[#2563eb] text-white px-6 py-4 rounded-xl font-bold text-center shadow-md mt-4"
          >
            Portal Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;