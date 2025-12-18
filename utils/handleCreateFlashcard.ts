import { Dispatch, SetStateAction } from "react";
import type { Flashcard } from "@/types/interface";
import { generateId } from "./generateId";

export const handleCreateFlashcard = (
  question: string,
  answer: string,
  setFlashcards: (value: Flashcard[]) => void,
  setShowCreateForm: Dispatch<SetStateAction<boolean>>,
  flashcards: Flashcard[]
) => {
  const newFlashcard: Flashcard = {
    id: generateId(),
    question,
    answer,
  };
  setFlashcards([...flashcards, newFlashcard]);
  setShowCreateForm(false);
};
