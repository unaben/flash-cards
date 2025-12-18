import { Dispatch, SetStateAction } from "react";
import type { Flashcard } from "@/types/interface";

export const handleConfirmDelete = (
  onDelete: (id: string) => void,
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>,
  flashcard: Flashcard
) => {
  onDelete(flashcard.id);
  setShowDeleteModal(false);
};
