'use client';

import React from 'react';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white font-roboto text-[#4A5568] flex flex-col">
      
      {/* --- Navbar (Simplified) --- */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#E0F2FE] p-1.5 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#57B3D6" strokeWidth="2.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <span className="font-extrabold text-[#2D3748] text-xl">Flash Card Generator</span>
        </Link>
        <div className="hidden md:block">
          <span className="text-[#A0AEC0] mr-2">Don't have an account?</span>
          <button className="text-[#57B3D6] font-bold hover:underline">Sign Up</button>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-grow flex items-center justify-center px-6 py-12 relative overflow-hidden">
        
        {/* Decorative Background Elements (Optional, matches landing page vibe) */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#E0F2FE] rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FEF3C7] rounded-full opacity-50 blur-3xl"></div>

        <div className="w-full max-w-md z-10">
          <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-gray-50">
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-[#57B3D6] mb-2">Welcome Back!</h1>
              <p className="text-[#A0AEC0]">Enter your details to continue learning.</p>
            </div>

            <form className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2D3748] ml-1 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-bold text-[#2D3748] uppercase tracking-wider">Password</label>
                  <button type="button" className="text-xs font-bold text-[#57B3D6] hover:underline">Forgot Password?</button>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-6 py-4 rounded-2xl bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Sign In Button */}
              <button className="w-full bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-4 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] transition-all text-lg mt-4">
                Sign In
              </button>

              {/* Social Login Divider */}
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-gray-300 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              {/* Google Sign In */}
              <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 py-3 rounded-full hover:bg-gray-50 transition-colors font-semibold text-[#4A5568]">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </form>
          </div>
          
          <p className="text-center mt-8 text-sm text-[#A0AEC0]">
            By signing in, you agree to our <br />
            <span className="text-[#57B3D6] cursor-pointer hover:underline">Terms of Service</span> and <span className="text-[#57B3D6] cursor-pointer hover:underline">Privacy Policy</span>.
          </p>
        </div>
      </main>

      {/* --- Simple Footer --- */}
      <footer className="py-8 text-center bg-[#E0F2FE]">
        <p className="text-[10px] text-[#57B3D6] font-bold uppercase tracking-[0.3em]">
          © 2026 Flashcard Generator
        </p>
      </footer>
    </div>
  );
}