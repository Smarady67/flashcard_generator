'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function StudyMode() {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);
  const totalCards = 5;

  return (
    <div className="min-h-screen bg-[#D1E0F3] font-roboto text-[#4A5568] flex flex-col">
      {/* --- Navbar --- */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-[#E0F2FE] p-1.5 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#57B3D6" strokeWidth="2.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <span className="font-extrabold text-[#2D3748] text-xl">Flash Card Generator</span>
        </div>
        <div className="flex gap-8 font-bold text-[#A0AEC0]">
          <Link href="/signin">Sign in</Link>
          <Link href="/dashboard" className="hover:text-[#57B3D6]">Dashboard</Link>
          <Link href="/dashboard/study" className="text-[#57B3D6] border-b-4 border-[#57B3D6] pb-1">Study Mode</Link>
          <Link href="#">Setting</Link>
        </div>
      </nav>

      {/* --- Main Study Area --- */}
      <main className="flex-grow flex items-center justify-center py-10 px-10">
        <div className="max-w-4xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white">
          
          {/* Header Section */}
          <div className="bg-[#FFB067] py-6 px-12 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white tracking-wide">Study Mode</h1>
            <Link 
              href="/dashboard" 
              className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-2 px-8 rounded-full shadow-md transition-all active:scale-95"
            >
              Leave
            </Link>
          </div>

          <div className="p-12 flex flex-col items-center">
            
            {/* The Flashcard Container */}
            <div className="w-full max-w-2xl bg-[#E2E8F0] rounded-[3rem] p-12 shadow-inner border border-gray-200 flex flex-col items-center justify-center min-h-[350px] relative">
              
              {/* Question Area */}
              <div className="text-center space-y-4 mb-10">
                <h2 className="text-4xl font-bold text-[#718096]">Question</h2>
                <div className="w-32 h-1 bg-gray-300 mx-auto rounded-full"></div>
              </div>

              {/* Answer Area */}
              <div className="text-center w-full">
                {isAnswerVisible ? (
                  <div className="animate-in fade-in zoom-in duration-300">
                    <p className="text-2xl font-medium text-[#4A5568] italic">
                      This is where the actual answer text would appear from your database!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-[#A0AEC0] text-xl font-medium">Answer is hidden</p>
                    <button 
                      onClick={() => setIsAnswerVisible(true)}
                      className="bg-[#60A5FA] hover:bg-[#3b82f6] text-white font-bold py-3 px-10 rounded-2xl shadow-[0_4px_0_#2563eb] active:shadow-none active:translate-y-[4px] transition-all text-lg"
                    >
                      Show
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination / Navigation Footer */}
            <div className="w-full mt-12 flex items-center justify-between">
              
              <button 
                disabled={currentCard === 1}
                onClick={() => { setCurrentCard(prev => prev - 1); setIsAnswerVisible(false); }}
                className="bg-white border-2 border-gray-100 text-[#A0AEC0] font-bold py-3 px-10 rounded-full shadow-sm hover:border-[#FFB067] hover:text-[#FFB067] disabled:opacity-30 disabled:hover:border-gray-100 disabled:hover:text-[#A0AEC0] transition-all"
              >
                Previous
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div 
                    key={dot}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentCard === dot ? 'bg-[#718096] scale-125' : 'bg-gray-200'}`}
                  />
                ))}
              </div>

              <button 
                disabled={currentCard === totalCards}
                onClick={() => { setCurrentCard(prev => prev + 1); setIsAnswerVisible(false); }}
                className="bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-3 px-12 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] disabled:opacity-50 disabled:active:translate-y-0 transition-all text-lg"
              >
                Next
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