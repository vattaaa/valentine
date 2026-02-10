
import React, { useState } from 'react';
import { LoveStoryConfig } from '../types';

interface SetupFormProps {
  onSubmit: (config: LoveStoryConfig) => void;
}

const SetupForm: React.FC<SetupFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LoveStoryConfig>({
    partnerName: 'Raffa Abyakta Hernawan',
    yourName: '',
    relationshipDuration: '',
    favoriteMemory: '',
    ldrDistance: '',
    petNames: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="glass p-8 rounded-3xl shadow-2xl border border-rose-100 animate-fade-in">
      <h2 className="text-3xl font-cursive text-rose-600 mb-2 text-center">Sedikit Tentang Kita</h2>
      <p className="text-center text-rose-400 text-sm mb-6">Isi detail ini untuk merangkai kejutan spesialmu</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Nama Dia</label>
            <input
              required
              disabled
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-rose-50 border-rose-100 text-rose-900 font-medium border cursor-not-allowed opacity-80"
              value={formData.partnerName}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Namamu</label>
            <input
              required
              type="text"
              className="w-full px-4 py-3 rounded-xl border-rose-200 focus:ring-rose-500 focus:border-rose-500 border bg-white"
              value={formData.yourName}
              onChange={e => setFormData({...formData, yourName: e.target.value})}
              placeholder="Siapa namamu?"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Sudah berapa lama bersama?</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 rounded-xl border-rose-200 focus:ring-rose-500 focus:border-rose-500 border bg-white"
            value={formData.relationshipDuration}
            onChange={e => setFormData({...formData, relationshipDuration: e.target.value})}
            placeholder="Contoh: 1 tahun 4 bulan"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Kenangan paling manis kita...</label>
          <textarea
            required
            className="w-full px-4 py-3 rounded-xl border-rose-200 focus:ring-rose-500 focus:border-rose-500 border h-28 bg-white"
            value={formData.favoriteMemory}
            onChange={e => setFormData({...formData, favoriteMemory: e.target.value})}
            placeholder="Ceritakan saat kita pertama bertemu atau momen favoritmu..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Jarak yang memisahkan</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border-rose-200 focus:ring-rose-500 focus:border-rose-500 border bg-white"
              value={formData.ldrDistance}
              onChange={e => setFormData({...formData, ldrDistance: e.target.value})}
              placeholder="Misal: Jakarta - Surabaya"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Panggilan Sayang</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border-rose-200 focus:ring-rose-500 focus:border-rose-500 border bg-white"
              value={formData.petNames}
              onChange={e => setFormData({...formData, petNames: e.target.value})}
              placeholder="Contoh: Sayang, Beb, Mas"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold transition-all shadow-lg mt-4 transform hover:-translate-y-1 active:translate-y-0"
        >
          Buat Keajaiban Sekarang ✨
        </button>
      </form>
    </div>
  );
};

export default SetupForm;
