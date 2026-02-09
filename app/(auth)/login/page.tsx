'use client';

import React from 'react';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white font-roboto text-[#4A5568] flex flex-col">
      
      {/* --- Navbar --- */}
      <nav className="bg-white flex items-center justify-between px-10 py-5 border-b border-gray-100 z-20">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center">
            <img 
              src="/Picture/logo.png" 
              alt="FlashLearn Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <span className="font-extrabold text-[#2D3748] text-xl">Flash Card Generator</span>
        </Link>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-grow flex items-center justify-center px-10 py-12 relative overflow-hidden">
        
        <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-[#E0F2FE] rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-[#FEF3C7] rounded-full opacity-40 blur-3xl"></div>

        {/* Layout Container */}
        <div className="flex flex-col md:flex-row items-stretch w-full max-w-6xl z-10 shadow-[0_10px_25px_rgba(0,0,0,0.05)] rounded-[60px] overflow-hidden bg-white border border-gray-50">
          
          {/* LEFT SIDE: Login Form */}
          <div className="md:w-1/2 flex justify-center items-center p-12">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <div className="inline-block bg-[#5D78D3] text-white px-10 py-3 rounded-xl shadow-md mb-6">
                   <h2 className="text-2xl font-bold">Login Account</h2>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter Email"
                    className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-gray-100 focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter password"
                    className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-gray-100 focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-4">
                  <Link 
                    href="/forgot" 
                    className="flex-1 bg-white border-2 border-gray-100 hover:border-[#57B3D6] text-[#A0AEC0] hover:text-[#57B3D6] font-bold py-4 rounded-full shadow-sm hover:shadow-md transition-all text-base text-center block"
                  >
                    Forgot password?
                  </Link>
                  
                  <Link 
                    href="/dashboard"
                    className="flex-1 bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-4 rounded-full shadow-[0_4px_0_#E38E49] active:shadow-none active:translate-y-[4px] transition-all text-lg text-center block"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE: Welcome Back Block */}
          <div className="md:w-1/2 bg-[#5D78D3] flex flex-col justify-center items-center text-center p-12 text-white relative">
             <div className="relative z-10 flex flex-col items-center justify-center h-full w-full rounded-l-[100px] md:bg-[#5D78D3]">
                <h1 className="text-5xl font-bold mb-6">Welcome Back, Friend!</h1>
                <p className="text-xl mb-8 opacity-90 font-light">
                  Don't have an account? <br />
                </p>
                
                <Link href="/signup" className="px-10 py-3 border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-[#5D78D3] transition-colors">
                  Sign up
                </Link>
             </div>
          </div>

        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="py-8 text-center bg-[#E0F2FE]">
        <p className="text-[10px] text-[#57B3D6] font-bold uppercase tracking-[0.3em]">
          © 2026 Flashcard Generator
        </p>
      </footer>
    </div>
  );
}