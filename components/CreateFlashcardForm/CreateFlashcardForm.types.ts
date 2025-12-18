export interface CreateFlashcardFormProps {
    onSubmit: (question: string, answer: string) => void;
    onCancel: () => void;
  }