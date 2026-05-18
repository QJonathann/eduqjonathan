import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

export default function Privacy() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12 px-4"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
          <Lock size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Polityka prywatności</h1>
      </div>
      
      <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm space-y-6 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Ochrona Twoich danych</h2>
          <p>Twoja prywatność jest dla nas priorytetem. Gromadzimy jedynie niezbędne dane kontaktowe w celu realizacji lekcji i kontaktu z uczniami.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Pliki Cookies</h2>
          <p>Nasza strona wykorzystuje podstawowe pliki cookies w celu zapewnienia prawidłowego działania serwisu oraz analizy ruchu.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Twoje Prawa</h2>
          <p>W każdym momencie masz prawo do wglądu, zmiany oraz usunięcia swoich danych z naszej bazy.</p>
        </section>

        <p className="pt-8 text-sm text-slate-400 italic">Ostatnia aktualizacja: 18 maja 2026</p>
      </div>
    </motion.div>
  );
}
