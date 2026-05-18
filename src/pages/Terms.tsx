import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Terms() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12 px-4"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Warunki świadczenia usług</h1>
      </div>
      
      <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm space-y-6 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Postanowienia ogólne</h2>
          <p>Niniejszy regulamin określa zasady korzystania z platformy Korepetycje Online oraz zasady współpracy przy realizacji zajęć edukacyjnych.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Rezerwacja zajęć</h2>
          <p>Zajęcia można rezerwować poprzez system online dostępny na stronie głównej lub poprzez bezpośredni kontakt telefoniczny/e-mailowy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Płatności</h2>
          <p>Rozliczenia za zajęcia następują zgodnie z ustalonym cennikiem dostępnym na stronie w sekcji "Gwarancja jakości" lub po indywidualnym ustaleniu.</p>
        </section>

        <p className="pt-8 text-sm text-slate-400 italic">Ostatnia aktualizacja: 18 maja 2026</p>
      </div>
    </motion.div>
  );
}
