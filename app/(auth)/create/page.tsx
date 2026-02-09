'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CreateDeck() {
  const [deckName, setDeckName] = useState('');

  const existingDecks = [
    'Biology 101',
    'Organic Chemistry',
    'World History',
    'Spanish Verbs',
    'React Hooks'
  ];

  return (
    <div className="min-h-screen bg-[#D1E0F3] font-roboto text-[#4A5568] flex flex-col">
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
          <Link href="/login" className="hover:text-[#57B3D6] transition-colors">Sign in</Link>
          <Link href="/dashboard" className="text-[#57B3D6] border-b-4 border-[#57B3D6] pb-1">Dashboard</Link>
          <Link href="/study" className="hover:text-[#57B3D6] transition-colors">Study Mode</Link>
          <Link href="/setting_privacy" className="hover:text-[#57B3D6] transition-colors">Setting</Link>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-grow flex items-center justify-center py-12 px-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT COLUMN: Create/Edit Form */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white">
            <div className="bg-[#5794F7] py-6 px-10">
              <h1 className="text-3xl font-bold text-white tracking-wide text-center">New Deck</h1>
            </div>
            
            <div className="p-12 space-y-10">
              <div className="space-y-4">
                <label className="text-lg font-bold text-[#4A5568] block">
                  New deck name<span className="text-red-400">*</span>
                </label>
                <input 
                  type="text"
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                  placeholder="Enter new deck name"
                  className="w-full bg-[#F7FAFC] border-2 border-transparent focus:border-[#57B3D6] rounded-xl px-6 py-4 outline-none transition-all text-lg"
                />
              </div>

              <div className="flex items-center justify-between gap-6 pt-4">
                <Link 
                  href="/dashboard"
                  className="flex-1 text-center py-3 px-6 rounded-2xl border-2 border-[#4A5568] font-bold text-[#4A5568] hover:bg-gray-50 transition-all active:scale-95"
                >
                  Cancel
                </Link>
                
                <Link 
                  href="/deck"
                  className="flex-1 py-3 px-6 rounded-2xl bg-[#FFB067] text-white font-bold shadow-[0_4px_0_#E38E49] hover:bg-[#ff9e45] active:shadow-none active:translate-y-[4px] transition-all text-lg text-center"
                >
                  Create
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Deck List Sidebar */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white h-full">
            <div className="bg-[#5794F7] py-6 px-10">
              <h1 className="text-3xl font-bold text-white tracking-wide text-center">Existing Decks</h1>
            </div>
            
            <div className="p-8">
              <div className="space-y-3">
                {existingDecks.map((deck, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <span className="font-bold text-[#4A5568] text-lg">{deck}</span>
                    <button className="text-gray-300 group-hover:text-red-400 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
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