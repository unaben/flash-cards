import { Flashcard } from "@/types/interface";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleInputChange = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setFormData: Dispatch<SetStateAction<Omit<Flashcard, "id">>>
) => {
  const { value, name } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
