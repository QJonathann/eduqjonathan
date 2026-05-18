import { motion } from 'motion/react';
import { BookOpen, Calculator, Atom, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  {
    id: 'biologia',
    name: 'Biologia',
    description: 'Fiszki, materiały i opracowania z biochemii, genetyki, anatomii i innych działów.',
    icon: BookOpen,
    color: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-emerald-100',
    path: '/biologia'
  },
  {
    id: 'fizyka',
    name: 'Fizyka',
    description: 'Zadania z mechaniki, termodynamiki i optyki z odnośnikami do najlepszych platform ćwiczeniowych.',
    icon: Atom,
    color: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-100',
    path: '/fizyka'
  },
  {
    id: 'matematyka',
    name: 'Matematyka',
    description: 'Baza zadań z analizy, geometrii i algebry. Materiały są obecnie w przygotowaniu i zostaną udostępnione wkrótce.',
    icon: Calculator,
    color: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-100',
    path: '/matematyka',
    isComingSoon: true
  }
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Education Hub Hero Section */}
      <section className="text-center py-16 animate-in fade-in slide-in-from-top-4 duration-1000">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Baza Materiałów Edukacyjnych
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Wybierz przedmiot i <br className="hidden md:block" /> zacznij naukę
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Znajdziesz tutaj autorskie materiały, fiszki oraz wyselekcjonowane zadania, które pomogą Ci przygotować się do matury i sprawdzianów w liceum.
          </p>
        </motion.div>
      </section>

      {/* Subject Selection Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
          >
            <div className="h-full relative overflow-hidden flex flex-col">
              {subject.isComingSoon && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-purple-100 text-purple-700 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md border border-purple-200 shadow-sm">
                    Wkrótce
                  </span>
                </div>
              )}
              
              <Link
                to={subject.path}
                className={`group block p-8 bg-white border ${subject.borderColor} rounded-3xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden grow ${subject.isComingSoon ? 'opacity-80' : ''}`}
              >
                {!subject.isComingSoon && (
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-slate-300 group-hover:text-blue-400" size={24} />
                  </div>
                )}
                
                <div className={`w-14 h-14 ${subject.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <subject.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{subject.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {subject.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  <span>{subject.isComingSoon ? 'Zobacz zapowiedź' : 'Przeglądaj materiały'}</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Simplified features info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-slate-100 italic">
        <div className="flex items-center gap-3 text-slate-500">
          <BookOpen size={18} className="text-emerald-500" />
          <span className="text-sm">Biologia: autorskie zestawy fiszek</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <Atom size={18} className="text-blue-500" />
          <span className="text-sm">Fizyka: wybrane zadania i narzędzia</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <Calculator size={18} className="text-purple-500" />
          <span className="text-sm">Matematyka: bazy zadań maturalnych</span>
        </div>
      </section>
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
