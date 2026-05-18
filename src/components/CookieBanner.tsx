import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] bg-[#0c121e] border-t border-white/5 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-3 text-white">
            <Shield size={18} className="text-blue-400" />
            <p className="text-sm font-medium">
              Strona wykorzystuje pliki cookies do poprawnego wyświetlania treści.{' '}
              <a href="https://www.qjonathan.pl/polityka-prywatnosci" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Dowiedz się więcej
              </a>
            </p>
          </div>
          <button
            onClick={acceptCookies}
            className="md:absolute md:right-12 bg-blue-600 text-white px-8 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all active:scale-95 whitespace-nowrap"
          >
            Akceptuję
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
