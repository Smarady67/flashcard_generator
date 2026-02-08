'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const router = useRouter();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to update password would go here
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white font-roboto text-[#4A5568] flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 border border-gray-50">
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F0F9FF] rounded-3xl mb-6 text-[#57B3D6]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h1 className="text-3xl font-bold text-[#57B3D6] mb-3">Set New Password</h1>
            <p className="text-[#A0AEC0]">Create a new secure password for your account.</p>
        </div>
        <form onSubmit={handleReset} className="space-y-5 text-left">
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] outline-none transition-all" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Confirm Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] outline-none transition-all" required />
          </div>
          <button type="submit" className="w-full bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-4 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] transition-all text-lg">Reset Password</button>
        </form>
      </div>
    </div>
  );
}