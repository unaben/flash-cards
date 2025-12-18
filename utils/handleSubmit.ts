import { Flashcard } from "@/types/interface";
import { Dispatch, SetStateAction } from "react";

export const handleSubmit = (
  question: string,
  answer: string,
  onSubmit: (question: string, answer: string) => void,
  setFormData: Dispatch<SetStateAction<Omit<Flashcard, "id">>>
) => {
  if (question.trim() && answer.trim()) {
    onSubmit(question, answer);
    setFormData({
      question: "",
      answer: "",
    });
  }
};
