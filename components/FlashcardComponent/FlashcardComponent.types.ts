import type { Flashcard } from "@/types/interface";

export type FlashcardComponentProps = {
  flashcard: Flashcard;
  onDelete: (id: string) => void;
};
