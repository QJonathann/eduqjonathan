import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronLeft, ChevronRight, RotateCcw, AlertCircle, CheckCircle2, History, BrainCircuit } from 'lucide-react';
import { biologyTopics, flashcardsByTopic } from '../data/biologyData';

export default function Biology() {
  const [selectedTopic, setSelectedTopic] = useState(biologyTopics[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState<Record<string, { rating: string, nextReview: number }>>({});
  const [now, setNow] = useState(Date.now());

  // Load progress on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('bio-progress-v2');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }

    const timer = setInterval(() => setNow(Date.now()), 10000); // Odświeżaj co 10s
    return () => clearInterval(timer);
  }, []);

  const currentTopicCards = flashcardsByTopic[selectedTopic] || [];

  const handleRating = (rating: 'to-review' | 'hard' | 'good' | 'easy') => {
    const cardId = currentTopicCards[currentIndex].id;
    
    const intervals = {
      'to-review': 60 * 1000,          // 1 minuta
      'hard': 5 * 60 * 1000,           // 5 minut
      'good': 10 * 60 * 1000,          // 10 minut
      'easy': 24 * 60 * 60 * 1000      // 1 dzień
    };

    const nextReview = Date.now() + intervals[rating];
    const newProgress = { 
      ...progress, 
      [cardId]: { rating, nextReview } 
    };
    
    setProgress(newProgress);
    localStorage.setItem('bio-progress-v2', JSON.stringify(newProgress));
    
    setTimeout(() => {
      handleNext();
    }, 200);
  };

  const resetProgress = () => {
    if (window.confirm('Czy na pewno chcesz zresetować wszystkie postępy i interwały czasowe w tym dziale?')) {
      const newProgress = { ...progress };
      currentTopicCards.forEach(card => delete newProgress[card.id]);
      setProgress(newProgress);
      localStorage.setItem('bio-progress-v2', JSON.stringify(newProgress));
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  const parseCloze = (text: string, showAnswer: boolean) => {
    if (showAnswer) {
      return text.replace(/{{c\d::(.*?)}}/g, '<span class="text-emerald-300 underline font-black">$1</span>');
    }
    return text.replace(/{{c\d::(.*?)}}/g, '<span class="bg-emerald-100/20 px-2 rounded font-mono text-emerald-100/50">[...]</span>');
  };

  const handleNext = () => {
    if (currentTopicCards.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTopicCards.length);
    }, 100);
  };

  const handlePrev = () => {
    if (currentTopicCards.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + currentTopicCards.length) % currentTopicCards.length);
    }, 100);
  };

  const selectTopic = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl mb-2">
          <BookOpen size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight px-4">Biologia - Fiszki</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Topic selection - Responsive Sidebar */}
        <aside className="lg:col-span-4 bg-white p-4 sm:p-6 rounded-[32px] border border-slate-100 shadow-sm lg:sticky lg:top-24 max-h-[300px] sm:max-h-[400px] lg:max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin w-full">
          <h3 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Działy (biologia)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {biologyTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => selectTopic(topic)}
                className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-sm font-semibold transition-all duration-200 ${
                  selectedTopic === topic
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 md:translate-x-1'
                    : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </aside>

        {/* Flashcard Area */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center space-y-6 min-h-[450px] sm:min-h-[500px] w-full px-2 sm:px-0">
          {currentTopicCards.length > 0 ? (
            <>
              <motion.div 
                layout
                className={`relative w-full max-w-3xl min-h-[380px] sm:min-h-[450px] cursor-pointer rounded-[40px] p-5 sm:p-12 flex flex-col items-center justify-center text-center shadow-xl transition-colors duration-500 border-2 ${
                  isFlipped ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-white border-slate-100 text-slate-800'
                }`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isFlipped ? 'text-emerald-200' : 'text-emerald-500'}`}>
                    {isFlipped ? 'Rozwiązanie' : 'Pytanie / Luka'}
                  </span>
                  {progress[currentTopicCards[currentIndex].id] && (
                    <div className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 ${
                      isFlipped ? 'bg-white/10 text-white' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    }`}>
                      {progress[currentTopicCards[currentIndex].id].nextReview > now ? (
                        <>
                          <History size={10} />
                          <span>Pauzuje (dostępna za {Math.ceil((progress[currentTopicCards[currentIndex].id].nextReview - now) / 60000)} min)</span>
                        </>
                      ) : (
                        <>
                          <BrainCircuit size={10} />
                          <span>Gotowa do powtórki</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isFlipped ? 'answer' : 'question'}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="w-full flex flex-col items-center"
                  >
                    <div 
                      className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed mb-6 px-2 w-full"
                      dangerouslySetInnerHTML={{ __html: parseCloze(currentTopicCards[currentIndex].front, isFlipped) }}
                    />
                    
                    {isFlipped && currentTopicCards[currentIndex].back && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-8 border-t border-emerald-500/50 w-full mt-4"
                      >
                         <p className="text-sm sm:text-lg text-emerald-100/90 italic leading-relaxed">
                           {currentTopicCards[currentIndex].back}
                         </p>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {isFlipped ? (
                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => handleRating('to-review')} 
                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-2xl flex flex-col items-center gap-1 transition-all active:scale-95 shadow-lg shadow-red-900/20"
                    >
                      <History size={16} />
                      <span className="text-[10px] font-black uppercase">Powtórka</span>
                      <span className="text-[8px] opacity-70">&lt; 1 min</span>
                    </button>
                    <button 
                      onClick={() => handleRating('hard')} 
                      className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-2xl flex flex-col items-center gap-1 transition-all active:scale-95 shadow-lg shadow-orange-900/20"
                    >
                      <BrainCircuit size={16} />
                      <span className="text-[10px] font-black uppercase">Trudne</span>
                      <span className="text-[8px] opacity-70">5 min</span>
                    </button>
                    <button 
                      onClick={() => handleRating('good')} 
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-2xl flex flex-col items-center gap-1 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                    >
                      <CheckCircle2 size={16} />
                      <span className="text-[10px] font-black uppercase">Dobrze</span>
                      <span className="text-[8px] opacity-70">10 min</span>
                    </button>
                    <button 
                      onClick={() => handleRating('easy')} 
                      className="bg-emerald-400 hover:bg-emerald-500 text-white p-3 rounded-2xl flex flex-col items-center gap-1 transition-all active:scale-95 shadow-lg shadow-emerald-900/20"
                    >
                      <GraduationCap size={16} />
                      <span className="text-[10px] font-black uppercase">Łatwo</span>
                      <span className="text-[8px] opacity-70">1 dzień</span>
                    </button>
                  </div>
                ) : (
                  <div className="mt-10">
                    <p className={`text-[10px] font-black uppercase tracking-widest opacity-40 ${isFlipped ? 'text-white' : 'text-slate-400'}`}>
                      Kliknij, aby uzupełnić
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Controls */}
              <div className="flex items-center space-x-6">
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="p-4 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 transition-colors shadow-sm active:scale-90"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="text-sm font-black text-slate-500 bg-white border border-slate-100 px-6 py-2 rounded-full min-w-[100px] text-center shadow-sm">
                  {currentIndex + 1} / {currentTopicCards.length}
                </div>

                <button 
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="p-4 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 transition-colors shadow-sm active:scale-90"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button 
                  onClick={() => { setCurrentIndex(0); setIsFlipped(false); }}
                  className="flex items-center space-x-2 text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium"
                >
                  <RotateCcw size={16} />
                  <span>Od początku</span>
                </button>
                <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
                <button 
                  onClick={resetProgress}
                  className="flex items-center space-x-2 text-slate-400 hover:text-red-500 transition-colors text-sm font-medium"
                >
                  <AlertCircle size={16} />
                  <span>Resetuj postęp nauki</span>
                </button>
              </div>
            </>
          ) : (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-[40px] p-12 text-center max-w-lg w-full flex flex-col items-center shadow-sm">
              <AlertCircle className="text-slate-200 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Brak materiałów</h3>
              <p className="text-slate-500 leading-relaxed">
                Pracujemy nad przygotowaniem fiszek dla działu:<br/>
                <span className="font-bold text-emerald-600">"{selectedTopic}"</span>
              </p>
            </div>
          )}

          {/* Anki CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-lg bg-emerald-50 border border-emerald-100 rounded-3xl p-6 sm:p-8 text-center space-y-4 mt-8"
          >
            <h4 className="text-lg font-bold text-emerald-900">Potrzebujesz całej bazy fiszek?</h4>
            <p className="text-emerald-700 text-sm leading-relaxed">
              Jeśli chcesz uczyć się jeszcze efektywniej, skontaktuj się ze mną, aby otrzymać kompletny plik z fiszkami gotowy do zaimportowania do aplikacji <span className="font-bold">Anki</span>.
            </p>
            <a 
              href="mailto:contact.qjonathan@gmail.com"
              className="inline-block bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all hover:shadow-lg active:scale-95"
            >
              Napisz do mnie
            </a>
          </motion.div>

          {/* Bug Report Link */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-xs sm:text-sm">
              Zauważyłeś błąd w pytaniu lub odpowiedzi? <br className="sm:hidden" />
              <a href="mailto:contact.qjonathan@gmail.com" className="text-emerald-600 font-bold hover:underline">Skontaktuj się ze mną</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
