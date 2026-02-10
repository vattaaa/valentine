
import React from 'react';

interface ArtViewProps {
  imageUrl: string;
  onNext: () => void;
}

const ArtView: React.FC<ArtViewProps> = ({ imageUrl, onNext }) => {
  return (
    <div className="flex flex-col items-center space-y-8 animate-fade-in">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl blur opacity-25 transition duration-1000"></div>
        <img
          src={imageUrl}
          alt="Couple Portrait"
          className="relative rounded-2xl shadow-2xl border-8 border-white max-w-full h-auto max-h-[60vh] object-cover"
        />
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-3xl font-cursive text-rose-600">Our Shared Horizon</h3>
        <p className="text-rose-800 font-serif-fancy italic max-w-md">
          A visualization of our love that knows no boundaries, reflecting the beauty of our digital connection.
        </p>
      </div>

      <button
        onClick={onNext}
        className="px-12 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
      >
        A Final Surprise...
      </button>
    </div>
  );
};

export default ArtView;
