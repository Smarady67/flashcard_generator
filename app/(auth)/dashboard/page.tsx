'use client';

import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const decks = [
    { name: 'Biology 101', cards: 12 },
    { name: 'Organic Chemistry', cards: 8 },
    { name: 'World History', cards: 15 },
    { name: 'Spanish Verbs', cards: 20 },
    { name: 'React Hooks', cards: 10 },
  ];

  return (
    <div className="min-h-screen bg-[#D1E0F3] font-roboto text-[#4A5568] flex flex-col">
      
      {/* --- Navbar --- */}
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

        <div className="flex items-center gap-8 font-bold text-[#A0AEC0]">
          {/* Linked to login folder */}
          <Link href="/login" className="hover:text-[#57B3D6] transition-colors">Sign in</Link>
          
          <Link href="/dashboard" className="text-[#57B3D6] border-b-4 border-[#57B3D6] pb-1">Dashboard</Link>
          
          {/* Linked to study folder */}
          <Link href="/study" className="hover:text-[#57B3D6] transition-colors">Study Mode</Link>
          
          {/* Linked to setting folder */}
          <Link href="/setting_privacy" className="hover:text-[#57B3D6] transition-colors">Setting</Link>
        </div>
      </nav>

      {/* --- Main Dashboard Content --- */}
      <main className="flex-grow flex flex-col items-center py-12 px-6">
        
        {/* Container Box */}
        <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white">
          
          {/* Blue Header */}
          <div className="bg-[#5794F7] py-8 px-12">
            <h1 className="text-4xl font-bold text-white tracking-wide">My Decks</h1>
          </div>

          <div className="p-10 space-y-8">
            
            {/* Stats Bar */}
            <div className="flex items-center justify-between bg-white rounded-3xl p-8 border border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-[#FFB067]">Total Decks: {decks.length}</h2>
                <p className="text-[#A0AEC0] font-medium italic">Total Cards: 65</p>
              </div>
              
              {/* Linked to create folder */}
              <Link 
                href="/create" 
                className="bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-3 px-10 rounded-full shadow-[0_5px_0_#E38E49] active:shadow-none active:translate-y-[5px] transition-all text-lg inline-block text-center"
              >
                Create Deck
              </Link>
            </div>

            {/* Decks List */}
            <div className="space-y-1">
              {decks.map((deck, index) => (
                <DeckRow key={index} name={deck.name} />
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* --- Simple Footer --- */}
      <footer className="py-6 text-center text-[#57B3D6] font-bold text-xs uppercase tracking-[0.3em]">
        © 2026 Flashcard Generator
      </footer>
    </div>
  );
}

function DeckRow({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group">
      <span className="text-2xl font-bold text-[#57B3D6] tracking-tight">{name}</span>
      
      <div className="flex items-center gap-4">
        {/* These can be linked to specific deck IDs later, e.g., href={`/study/${name}`} */}
        <button className="bg-white border-2 border-gray-100 text-[#2D3748] font-bold py-2 px-8 rounded-full shadow-sm hover:border-[#57B3D6] hover:text-[#57B3D6] transition-all text-sm uppercase tracking-tighter">
          Study Deck
        </button>
        
        <button className="bg-[#FFB067] hover:bg-[#ff9e45] text-white font-bold py-2 px-10 rounded-full shadow-[0_4px_0_#E38E49] active:shadow-none active:translate-y-[4px] transition-all text-sm">
          View Cards
        </button>

        <button className="p-2 text-gray-300 hover:text-red-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}