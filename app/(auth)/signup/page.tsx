'use client';

import React from 'react';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-white font-roboto text-[#4A5568] flex flex-col">
      
      {/* --- Navbar (Cleaned up) --- */}
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
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl z-10 gap-16">
          
          {/* LEFT SIDE: Introduction Text */}
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-4xl font-extrabold text-[#2D3748] leading-tight">
              Welcome to <br />
              <span className="text-[#57B3D6]">Flash Card Generator</span>
            </h1>
            
            <div className="space-y-6 text-[#718096] leading-relaxed text-lg">
              <p>
                With a simple and intuitive interface, Flash Card Generator supports effective self-study and helps improve memory retention. Whether you are preparing for exams or revising key concepts, this platform provides an easy and reliable way to manage your learning.
              </p>
              <p>
                Flash Card Generator is a web-based learning tool designed to help users create, organize, and study flash cards efficiently. This application allows you to build custom decks, add questions and answers, and review your knowledge one card at a time in a focused study mode.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 border border-gray-50">
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#57B3D6] mb-2">Create Your Account</h2>
                <p className="text-[#A0AEC0]">Join thousands of students today!</p>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Confirm</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 px-1 py-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="w-5 h-5 accent-[#57B3D6] cursor-pointer"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-[#A0AEC0]">
                    I agree to the <span className="text-[#57B3D6] font-bold cursor-pointer hover:underline">Terms</span>.
                  </label>
                </div>

                <button className="w-full bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-4 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] transition-all text-lg mt-2">
                  Create Account
                </button>

                <div className="text-center pt-4">
                  <span className="text-[#A0AEC0] mr-2 text-sm">Already have an account?</span>
                  <Link href="/login" className="text-[#57B3D6] font-bold hover:underline text-sm">
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* --- Footer (Old color maintained) --- */}
      <footer className="py-8 text-center bg-[#E0F2FE]">
        <p className="text-[10px] text-[#57B3D6] font-bold uppercase tracking-[0.3em]">
          © 2026 Flashcard Generator
        </p>
      </footer>
    </div>
  );
}