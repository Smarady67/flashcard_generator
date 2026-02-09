'use client';

import React from 'react';
import Link from 'next/link'; 

export default function FlashcardLanding() {
  return (
    <div className="min-h-screen bg-white font-roboto text-[#4A5568]">
      
      {/* --- Navbar --- */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <img 
              src="/Picture/logo.png" 
              alt="FlashLearn Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          <span className="font-extrabold text-[#2D3748] text-xl font-roboto">Flash Card Generator</span>
        </div>

        <div className="flex items-center gap-6 font-roboto">
          {/* [2] Sign In Link */}
          <Link href="/login" className="text-[#4A5568] hover:text-[#57B3D6] font-semibold transition-colors">
            Sign In
          </Link>
          
          {/* [3] Sign Up Link */}
          <Link href="/signup" className="bg-[#57B3D6] hover:bg-[#45a2c5] text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all active:scale-95">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-40 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 space-y-8 z-10 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-roboto font-bold text-[#57B3D6] leading-[1.1]">
              Master Any Subject with <br /> 
              Flashcard Generator
            </h1>
            <p className="text-[#A0AEC0] text-xl font-medium font-roboto">
              Learn more about flashcard generator
            </p>
            
            <Link href="/signup" className="inline-block bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-4 px-12 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] transition-all text-lg font-roboto">
              Get Started for Free
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center relative mt-16 md:mt-0">
            <img 
              src="/Picture/logowebpage.png" 
              alt="Flashcard Generator Logo" 
              className="w-80 h-80 md:w-150 md:h-150 object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#E0F2FE"></path>
          </svg>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="bg-[#E0F2FE] py-32 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <FeatureItem 
            color="bg-[#BFDBFE]" 
            icon={<svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#3182CE" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>}
            text="Create flashcards in seconds, no hassle required."
          />
          <FeatureItem 
            color="bg-[#FED7AA]" 
            icon={<svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#DD6B20" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
            text="Quickly generate cards for any subject or topic."
          />
          <FeatureItem 
            color="bg-[#BBF7D0]" 
            icon={<svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#38A169" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
            text="Study your flashcards anytime on any device."
          />
        </div>
      </section>

      {/* --- Popular Topics Section --- */}
      <section className="py-32 px-10 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-[#57B3D6]">Popular Flashcard Topics</h2>
          <p className="text-[#A0AEC0] text-lg font-roboto">Sign Up for free and start mastering all subject today!</p>
          
          <div className="flex flex-col items-center gap-10 pt-10">
            <div className="text-[#BDE5F8]">
              <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            
            <Link href="/signup" className="bg-[#FFB067] text-white py-3.5 px-16 rounded-full font-roboto italic text-2xl shadow-[0_5px_0_#E38E49]">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#E0F2FE] pt-32 pb-12 text-center relative mt-20">
        <div className="max-w-4xl mx-auto px-10 space-y-12">
          <h3 className="text-3xl font-bold text-[#57B3D6] font-roboto">Ready to Boost Your Learning?</h3>
          <p className="text-[11px] text-[#A0AEC0] font-bold uppercase tracking-[0.3em] pt-10 font-roboto">
            © 2026 Flashcard Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ color, icon, text }: { color: string, icon: React.ReactNode, text: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${color} p-9 rounded-[2.5rem] mb-8 shadow-sm transition-transform hover:scale-110 duration-300`}>
        {icon}
      </div>
      <p className="text-[#2D3748] font-semibold font-roboto leading-relaxed text-lg max-w-[240px] opacity-70">{text}</p>
    </div>
  );
}