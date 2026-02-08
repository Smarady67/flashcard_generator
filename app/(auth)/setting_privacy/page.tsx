'use client';

import React from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  // Mock user data
  const user = {
    name: 'James',
    username: 'LeBron Raymone James',
    email: 'lebronjames123@gmail.com',
    initial: 'J'
  };

  return (
    <div className="min-h-screen bg-[#D1E0F3] font-roboto text-[#4A5568] flex flex-col">
      {/* --- Navbar (Synced) --- */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <img 
              src="/Picture/logo.png" 
              alt="FlashLearn Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <span className="font-extrabold text-[#2D3748] text-xl">Flash Card Generator</span>
        </Link>
        <div className="flex gap-8 font-bold text-[#A0AEC0]">
          {/* Linked to login folder */}
          <Link href="/login" className="hover:text-[#57B3D6] transition-colors">Sign in</Link>
          
          <Link href="/dashboard" className="hover:text-[#57B3D6] transition-colors">Dashboard</Link>
          
          {/* Linked to study folder */}
          <Link href="/study" className="hover:text-[#57B3D6] transition-colors">Study Mode</Link>
          
          {/* Linked to setting_privacy folder and set as Active */}
          <Link href="/setting_privacy" className="text-[#57B3D6] border-b-4 border-[#57B3D6] pb-1">Setting</Link>
        </div>
      </nav>

      {/* --- Settings Content --- */}
      <main className="flex-grow flex items-center justify-center py-10 px-10">
        <div className="max-w-4xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white">
          
          {/* Profile Header Bar */}
          <div className="bg-[#3B4F8C] py-4 px-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00B4FF] rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-sm">
                {user.initial}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">{user.name}</span>
                <span className="text-xs text-blue-200">{user.email}</span>
              </div>
            </div>
            <button className="bg-[#FF3B30] hover:bg-[#d32f2f] text-white font-bold py-2 px-10 rounded-full shadow-[0_4px_0_#b71c1c] active:shadow-none active:translate-y-[4px] transition-all text-lg">
              Delete
            </button>
          </div>

          <div className="p-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left Side: Form Inputs */}
              <div className="space-y-8">
                {/* Username Field */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#A0AEC0] ml-1">Username</label>
                  <div className="w-full bg-[#E2E8F0] rounded-2xl px-6 py-4 text-[#4A5568] font-medium border border-gray-200">
                    {user.username}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#A0AEC0] ml-1">Email</label>
                  <div className="w-full bg-[#E2E8F0] rounded-2xl px-6 py-4 text-[#4A5568] font-medium border border-gray-200">
                    {user.email}
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#A0AEC0] ml-1">Password</label>
                  <div className="w-full bg-[#E2E8F0] rounded-2xl px-6 py-4 text-[#4A5568] font-medium border border-gray-200 tracking-widest">
                    ************
                  </div>
                </div>
              </div>

              {/* Right Side: Profile Icon Decoration */}
              <div className="hidden md:flex justify-center">
                <div className="text-[#3B4F8C] opacity-80">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* Change Password Button */}
            <div className="mt-12 flex justify-start">
              <button className="bg-[#3B4F8C] hover:bg-[#2d3b6b] text-white font-bold py-3 px-12 rounded-full shadow-[0_5px_0_#242e54] active:shadow-none active:translate-y-[5px] transition-all text-lg">
                Change password
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-[#57B3D6] font-bold text-xs uppercase tracking-[0.3em]">
        © 2026 Flashcard Generator
      </footer>
    </div>
  );
}