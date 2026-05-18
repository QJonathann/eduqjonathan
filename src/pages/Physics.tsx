import { Atom, ExternalLink, ArrowRight } from 'lucide-react';

export default function Physics() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-2">
          <Atom size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Fizyka - Ćwiczenia i Materiały</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Zrozum prawa rządzące wszechświatem. Przygotowaliśmy dla Ciebie wyselekcjonowane działy i polecane narzędzia do ćwiczeń.
        </p>
      </header>

      {/* Featured Resources Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-100">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <ExternalLink size={20} />
            <h3 className="text-sm font-black uppercase tracking-widest">Świetna strona do nauki</h3>
          </div>
          <p className="text-slate-700 font-medium">Fizyka Matura - kompleksowe opracowania</p>
          <a 
            href="https://fizykamatura.pl/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-bold hover:underline"
          >
            fizykamatura.pl <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-red-600">
            <ExternalLink size={20} />
            <h3 className="text-sm font-black uppercase tracking-widest">Polecany kanał YouTube</h3>
          </div>
          <p className="text-slate-700 font-medium">Karol Rogowski - Przykładowa playlista (Kinematyka)</p>
          <a 
            href="https://youtube.com/playlist?list=PLI52qDVconG8umOGiWdOjRltH1EOFC7eM&si=BPl8uhZHyafB5i7e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 font-bold hover:underline"
          >
            Obejrzyj na YouTube <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>

      <div className="bg-slate-50 rounded-[40px] p-8 border border-slate-200/50 text-center">
        <p className="text-slate-500 text-sm font-medium">
          <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md text-[10px] font-black uppercase tracking-widest mr-2 align-middle">Wkrótce</span>
          W przyszłości będą tutaj dostępne moje własne, autorskie opracowania zadań maturalnych. Bądź na bieżąco!
        </p>
      </div>

      <section className="bg-blue-600 rounded-[40px] p-12 text-white text-center space-y-6">
        <h2 className="text-3xl font-bold">Potrzebujesz pomocy z konkretnym zadaniem?</h2>
        <p className="text-blue-100 max-w-xl mx-auto">
          Umów się na lekcję próbną, podczas której rozwiążemy Twoje problemy z fizyki i matematyki w prosty sposób.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
          Skontaktuj się ze mną
        </button>
      </section>
    </div>
  );
}
