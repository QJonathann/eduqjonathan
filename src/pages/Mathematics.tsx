import { Calculator } from 'lucide-react';

export default function Mathematics() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] grow">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-2">
          <Calculator size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Matematyka - Zbiory Zadań</h1>
        <div className="flex justify-center">
          <span className="bg-purple-100 text-purple-700 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-purple-200 shadow-sm mb-4">
            Materiały w przygotowaniu
          </span>
        </div>
        <p className="text-slate-600 max-w-2xl mx-auto italic">
          Przygotowujemy dla Ciebie kompleksową bazę zadań z wyjaśnieniami. Bądź na bieżąco!
        </p>
      </header>
    </div>
  );
}
