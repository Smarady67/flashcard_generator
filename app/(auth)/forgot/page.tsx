'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordEmail() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/verify');
  };

  return (
    <div className="min-h-screen bg-white font-roboto text-[#4A5568] flex flex-col">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#E0F2FE] p-1.5 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#57B3D6" strokeWidth="2.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <span className="font-extrabold text-[#2D3748] text-xl">Flash Card Generator</span>
        </Link>
      </nav>

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md z-10">
          <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-gray-50 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F0F9FF] rounded-3xl mb-6 text-[#57B3D6]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h1 className="text-3xl font-bold text-[#57B3D6] mb-3">Forgot Password?</h1>
            <p className="text-[#A0AEC0] mb-8">Enter your email and we'll send a code to reset your password.</p>
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="name@example.com" className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] outline-none transition-all" required />
              </div>
              <button type="submit" className="w-full bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-4 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] transition-all text-lg">Send Reset Code</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}