
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="text-center space-y-8 animate-fade-in px-4">
      <div className="relative inline-block">
        <div className="absolute -inset-4 bg-rose-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <div className="relative inline-block p-6 rounded-full bg-white shadow-2xl mb-4 border-4 border-rose-100 animate-heartbeat">
          <svg className="w-24 h-24 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-lg font-serif-fancy text-rose-400 tracking-[0.3em] uppercase animate-fade-in">A Special Gift for</p>
        <h1 className="text-5xl md:text-7xl font-cursive text-rose-600 drop-shadow-lg leading-tight">
          Raffa Abyakta Hernawan
        </h1>
        <div className="h-px w-24 bg-rose-300 mx-auto my-6"></div>
        <p className="text-xl text-rose-800 font-serif-fancy italic max-w-md mx-auto leading-relaxed">
          "Distance is but a test of how far love can travel. My heart resides wherever you are."
        </p>
      </div>

      <div className="pt-10">
        <button
          onClick={onStart}
          className="group relative px-14 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold text-2xl shadow-[0_10px_30px_rgba(244,63,94,0.3)] transition-all transform hover:scale-105 active:scale-95 border-b-4 border-rose-700 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Open My Love Letter 
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </button>
      </div>
    </div>
  );
};

export default Landing;
