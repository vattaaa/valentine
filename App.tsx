
import React, { useState } from 'react';
import { AppStage, LoveStoryConfig, GeneratedContent } from './types';
import Landing from './components/Landing';
import StoryView from './components/StoryView';
import ArtView from './components/ArtView';
import FinalSurprise from './components/FinalSurprise';
import { generateLoveContent, generateLoveImage } from './services/geminiService';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.LANDING);
  const [config] = useState<LoveStoryConfig>({
    partnerName: 'Raffa Abyakta',
    yourName: 'Fatta',
    relationshipDuration: 'over 3 months',
    favoriteMemory: 'Navigating our days together solely through WhatsApp, Instagram, TikTok, games, iMessage, and FaceTime calls.',
    ldrDistance: 'South Tangerang to Tegal City',
    petNames: 'sayangku cintaku pacar aku duniaku yang paling indah lucu imut diseluruh universe'
  });
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [coupleImageUrl, setCoupleImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const handleStart = async () => {
    setLoading(true);
    setLoadingMessage("Bridging the miles between South Tangerang and Tegal...");
    try {
      const generated = await generateLoveContent(config);
      setContent(generated);
      setStage(AppStage.STORY);
    } catch (error) {
      console.error(error);
      alert("A digital interference occurred in our love story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateArt = async () => {
    if (!content) return;
    setLoading(true);
    setLoadingMessage("Visualizing our digital connection in high art...");
    try {
      const imageUrl = await generateLoveImage(content.imagePrompt);
      setCoupleImageUrl(imageUrl);
      setStage(AppStage.ART);
    } catch (error) {
      console.error(error);
      alert("The artistic rendering failed. Let's try once more.");
    } finally {
      setLoading(false);
    }
  };

  const goToFinal = () => setStage(AppStage.FINAL);

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-200 opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <main className="w-full max-w-2xl z-10">
        {loading ? (
          <div className="flex flex-col items-center space-y-6 text-center animate-fade-in">
            <div className="w-24 h-24 text-rose-500 animate-heartbeat">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <p className="text-xl font-serif-fancy text-rose-800 italic px-4">{loadingMessage}</p>
          </div>
        ) : (
          <>
            {stage === AppStage.LANDING && <Landing onStart={handleStart} />}
            {stage === AppStage.STORY && content && config && (
              <StoryView
                content={content}
                config={config}
                onNext={generateArt}
              />
            )}
            {stage === AppStage.ART && coupleImageUrl && (
              <ArtView
                imageUrl={coupleImageUrl}
                onNext={goToFinal}
              />
            )}
            {stage === AppStage.FINAL && config && <FinalSurprise config={config} />}
          </>
        )}
      </main>

      {/* Persistent Footer */}
      <footer className="mt-8 text-rose-400 text-sm font-medium z-10 text-center">
        Created with eternal love by Fatta for Raffa
      </footer>
    </div>
  );
};

export default App;
