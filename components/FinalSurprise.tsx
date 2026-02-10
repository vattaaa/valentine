
import React, { useEffect, useState } from 'react';
import { LoveStoryConfig } from '../types';

interface FinalSurpriseProps {
  config: LoveStoryConfig;
}

const FinalSurprise: React.FC<FinalSurpriseProps> = ({ config }) => {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: string; delay: string }[]>([]);

  useEffect(() => {
    const newHearts = [...Array(40)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 25 + 10}px`,
      delay: `${Math.random() * 8}s`
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="text-center space-y-10 relative py-8 px-4">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute bottom-0 text-rose-400 opacity-50"
            style={{
              left: heart.left,
              fontSize: heart.size,
              animation: `float-up 7s linear infinite`,
              animationDelay: heart.delay
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <div className="relative z-10 space-y-8 max-w-lg mx-auto">
        <div className="space-y-2">
          <p className="text-rose-400 font-bold tracking-[0.4em] uppercase text-xs">Happy Valentine's Day</p>
          <h2 className="text-6xl md:text-7xl font-cursive text-rose-600 animate-pulse leading-none">
            Raffa Abyakta
          </h2>
        </div>

        <div className="flex items-center justify-center space-x-6 text-2xl font-serif-fancy text-rose-800">
          <div className="flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest text-rose-400 mb-1">From</span>
            <span className="border-b-2 border-rose-200 px-2">{config.yourName}</span>
          </div>
          <div className="bg-rose-500 p-4 rounded-full shadow-xl animate-heartbeat text-white">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest text-rose-400 mb-1">To</span>
            <span className="border-b-2 border-rose-200 px-2">Raffa</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-double border-rose-100 transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shadow-md">
            <span className="text-xl">📍</span>
          </div>
          <p className="text-lg text-rose-900 leading-relaxed mb-6 font-serif-fancy">
            More than 3 months of sharing our lives across the distance. From South Tangerang to Tegal City, our love has flourished through screens and whispers on FaceTime.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mb-6"></div>
          <p className="text-rose-500 font-bold italic text-lg leading-relaxed text-center px-4">
            "To my {config.petNames}, you are the most beautiful part of my universe."
          </p>
        </div>

        <div className="pt-6 flex flex-col items-center space-y-4">
          <div className="relative group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <div className="absolute -inset-4 bg-rose-200 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
             <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform active:scale-95">
                <svg className="w-10 h-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
             </div>
          </div>
          <p className="text-rose-600 font-cursive text-3xl animate-pulse">My love for you is eternal.</p>
        </div>
      </div>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0); opacity: 0; }
          20% { opacity: 0.5; }
          100% { transform: translateY(-1000px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FinalSurprise;
