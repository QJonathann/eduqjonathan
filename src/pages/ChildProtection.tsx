import { motion } from 'motion/react';
import { UserCheck } from 'lucide-react';

export default function ChildProtection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12 px-4"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
          <UserCheck size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Standardy ochrony małoletnich</h1>
      </div>
      
      <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm space-y-6 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Bezpieczeństwo uczniów</h2>
          <p>Korepetycje Online kładą najwyższy nacisk na bezpieczeństwo małoletnich uczniów podczas zajęć zdalnych.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Zasady kontaktu</h2>
          <p>Każda forma kontaktu między korepetytorem a uczniem odbywa się w celach wyłącznie edukacyjnych i z poszanowaniem granic osobistych.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Współpraca z rodzicami</h2>
          <p>Zalecamy aktywny udział rodziców w procesie organizacji nauki oraz otwartość na wszelkie zgłoszenia dotyczące przebiegu zajęć.</p>
        </section>

        <p className="pt-8 text-sm text-slate-400 italic">Ostatnia aktualizacja: 18 maja 2026</p>
      </div>
    </motion.div>
  );
}
