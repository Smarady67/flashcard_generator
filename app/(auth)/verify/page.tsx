'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyCode() {
  const router = useRouter();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/reset');
  };

  return (
    <div className="min-h-screen bg-white font-roboto text-[#4A5568] flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 text-center border border-gray-50">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F0F9FF] rounded-3xl mb-6 text-[#57B3D6]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <h1 className="text-3xl font-bold text-[#57B3D6] mb-3">Check Your Email</h1>
        <p className="text-[#A0AEC0] mb-8">We sent a verification code to your email address.</p>
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <input key={i} type="text" maxLength={1} className="w-12 h-14 text-center text-xl font-bold rounded-xl bg-[#F7FAFC] border-2 border-gray-100 focus:border-[#57B3D6] outline-none" required />
            ))}
          </div>
          <button type="submit" className="w-full bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-4 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] transition-all text-lg">Verify Code</button>
        </form>
      </div>
    </div>
  );
}