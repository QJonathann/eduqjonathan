import { Flashcard } from '../types';
import { chemizmFiszki } from './biology/chemizm';
import { komorkaFiszki } from './biology/komorka';

// Ponowne eksportowanie interfejsu dla kompatybilności
export type { Flashcard };

export const biologyTopics = [
  "I. Chemizm życia",
  "II. Komórka",
  "III. Energia i metabolizm",
  "IV. Podziały komórkowe",
  "V. Zasady klasyfikacji i sposoby identyfikacji organizmów",
  "VI. Bakterie i archeowce",
  "VII. Grzyby",
  "VIII. Protisty",
  "IX. Różnorodność roślin",
  "X. Różnorodność zwierząt",
  "XI. Funkcjonowanie zwierząt",
  "XII. Wirusy",
  "XIII. Ekspresja informacji genetycznej",
  "XIV. Genetyka klasyczna",
  "XV. Biotechnologia. Podstawy inżynierii genetycznej",
  "XVI. Ewolucja",
  "XVII. Ekologia",
  "XVIII. Różnorodność biologiczna, jej zagrożenia i ochrona"
];

export const flashcardsByTopic: Record<string, Flashcard[]> = {
  "I. Chemizm życia": chemizmFiszki,
  "II. Komórka": komorkaFiszki,
  "III. Energia i metabolizm": [],
  "IV. Podziały komórkowe": [],
  "V. Zasady klasyfikacji i sposoby identyfikacji organizmów": [],
  "VI. Bakterie i archeowce": [],
  "VII. Grzyby": [],
  "VIII. Protisty": [],
  "IX. Różnorodność roślin": [],
  "X. Różnorodność zwierząt": [],
  "XI. Funkcjonowanie zwierząt": [],
  "XII. Wirusy": [],
  "XIII. Ekspresja informacji genetycznej": [],
  "XIV. Genetyka klasyczna": [],
  "XV. Biotechnologia. Podstawy inżynierii genetycznej": [],
  "XVI. Ewolucja": [],
  "XVII. Ekologia": [],
  "XVIII. Różnorodność biologiczna, jej zagrożenia i ochrona": []
};
