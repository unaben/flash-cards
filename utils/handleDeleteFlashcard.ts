import { Flashcard } from "@/types/interface";

export const handleDeleteFlashcard = (
  id: string,
  setFlashcards: (value: Flashcard[]) => void,
  flashcards: Flashcard[]
) => {
  setFlashcards(flashcards.filter((card) => card.id !== id));
};
