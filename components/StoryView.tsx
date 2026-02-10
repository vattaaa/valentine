
import React from 'react';
import { GeneratedContent, LoveStoryConfig } from '../types';

interface StoryViewProps {
  content: GeneratedContent;
  config: LoveStoryConfig;
  onNext: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({ content, config, onNext }) => {
  return (
    <div className="space-y-8 animate-fade-in max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">
      <section className="glass p-10 rounded-3xl shadow-xl text-center border-t-8 border-rose-400 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rose-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          A Poetic Tribute
        </div>
        <h3 className="text-3xl font-cursive text-rose-600 mb-6 italic">For Dearest Raffa</h3>
        <p className="text-xl font-serif-fancy leading-relaxed text-rose-900 whitespace-pre-line italic">
          {content.poem}
        </p>
      </section>

      <section className="glass p-10 rounded-3xl shadow-xl border-l-8 border-rose-400 relative overflow-hidden">
        <div className="absolute top-4 right-6 opacity-5">
          <svg className="w-32 h-32 text-rose-900" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </div>
        <h3 className="text-2xl font-bold text-rose-800 mb-6 font-serif-fancy border-b border-rose-100 pb-2">My Dearest Raffa Abyakta,</h3>
        <p className="text-rose-900 leading-loose text-lg font-light">
          {content.letter}
        </p>
        <div className="mt-10 text-right">
          <p className="font-serif-fancy text-rose-400 text-sm uppercase tracking-tighter">Forever yours,</p>
          <p className="font-cursive text-4xl text-rose-600 mt-2">
            {config.yourName}
          </p>
        </div>
      </section>

      <div className="flex justify-center pt-6 sticky bottom-0 bg-rose-50 bg-opacity-90 backdrop-blur-sm pb-6">
        <button
          onClick={onNext}
          className="px-12 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold shadow-2xl transition-all transform hover:scale-105 border-b-4 border-rose-800"
        >
          View Our Digital Portrait ✨
        </button>
      </div>
    </div>
  );
};

export default StoryView;
