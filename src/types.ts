import { BookOpen, Calculator, Atom, Zap, Layout, GraduationCap } from 'lucide-react';

export interface Subject {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  materialsCount: number;
}

export interface Flashcard {
  id: string;
  front: string; // Zawiera tekst z lukami {{c1::...}}
  back: string;  // Wyjaśnienie/dodatkowe info z pliku Anki
}
