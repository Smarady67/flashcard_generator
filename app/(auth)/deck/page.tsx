'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CardManager() {
  const [selectedCard, setSelectedCard] = useState({ id: 1, question: 'What is the chemical symbol for Gold?' });

  const cards = [
    { id: 1, name: 'Card 1' },
    { id: 2, name: 'Card 2' },
    { id: 3, name: 'Card 3' },
    { id: 4, name: 'Card 4' },
    { id: 5, name: 'Card 5' },
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
        <div className="flex gap-8 font-bold text-[#A0AEC0]">
          {/* Linked to login folder */}
          <Link href="/login" className="hover:text-[#57B3D6] transition-colors">Sign in</Link>
          
          <Link href="/dashboard" className="text-[#57B3D6] border-b-4 border-[#57B3D6] pb-1">Dashboard</Link>
          
          {/* Linked to study folder */}
          <Link href="/study" className="hover:text-[#57B3D6] transition-colors">Study Mode</Link>
          
          {/* Linked to setting_privacy folder */}
          <Link href="/setting_privacy" className="hover:text-[#57B3D6] transition-colors">Setting</Link>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-grow flex items-center justify-center py-10 px-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* LEFT: Card List (Col-span 2) */}
          <div className="md:col-span-2 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white">
            <div className="bg-[#5794F7] py-6 px-10">
              <h1 className="text-3xl font-bold text-white text-center">Deck 1</h1>
            </div>
            
            <div className="p-8">
              {/* Deck Info Header */}
              <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm border border-gray-50 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-[#FFB067]">Chemistry</h2>
                <p className="text-[#A0AEC0] font-medium">Total Cards: {cards.length}</p>
              </div>

              {/* Card Items */}
              <div className="space-y-1">
                {cards.map((card) => (
                  <div 
                    key={card.id} 
                    className={`flex items-center justify-between p-4 rounded-xl border-b border-gray-100 last:border-0 hover:bg-[#FFF5EB] transition-colors group ${selectedCard.id === card.id ? 'bg-[#FFF5EB]' : ''}`}
                  >
                    <span className={`text-lg font-bold ${selectedCard.id === card.id ? 'text-[#57B3D6]' : 'text-[#4A5568]'}`}>
                      {card.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setSelectedCard({ ...selectedCard, id: card.id })}
                        className="bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold py-1.5 px-5 rounded-full shadow-sm active:translate-y-px transition-all"
                      >
                        Edit
                      </button>
                      <button className="text-gray-300 hover:text-red-400 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Edit Panel (Col-span 3) */}
          <div className="md:col-span-3 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white flex flex-col h-[500px]">
            {/* Header with Close Icon */}
            <div className="bg-[#FFB067] py-4 px-10 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white tracking-wide">Card {selectedCard.id}</h1>
              <Link href="/dashboard" className="text-white hover:rotate-90 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </Link>
            </div>
            
            <div className="p-12 flex-grow flex flex-col justify-center">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-2xl font-bold text-[#2D3748] pt-1">Question:</span>
                <textarea 
                  value={selectedCard.question}
                  onChange={(e) => setSelectedCard({...selectedCard, question: e.target.value})}
                  className="flex-grow text-xl font-medium text-[#4A5568] border-b-2 border-gray-400 focus:border-[#57B3D6] outline-none bg-transparent py-1 resize-none h-24"
                  placeholder="Enter your question here..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-auto">
                {/* ANSWER BUTTON LINKED TO answer FOLDER */}
                <Link 
                  href="/answer"
                  className="bg-[#00B4FF] hover:bg-[#0094d1] text-white font-bold py-3 px-12 rounded-full shadow-[0_4px_0_#0086bd] active:shadow-none active:translate-y-[4px] transition-all text-center"
                >
                  Answer
                </Link>
                
                <div className="flex gap-4">
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-400 transition-all active:scale-95">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-400 transition-all active:scale-95">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}