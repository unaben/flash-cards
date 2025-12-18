"use client";

import { useState } from "react";
import type { CreateFlashcardFormProps } from "./CreateFlashcardForm.types";
import styles from "./CreateFlashcardForm.module.css";

const CreateFlashcardForm: React.FC<CreateFlashcardFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleSubmit = () => {
    if (question.trim() && answer.trim()) {
      onSubmit(question, answer);
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.formTitle}>Create Flashcard</h2>
      <div className={styles.formGroup}>
        <label htmlFor="question" className={styles.label}>
          Question
        </label>
        <textarea
          id="question"
          className={styles.textarea}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question..."
          rows={3}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="answer" className={styles.label}>
          Answer
        </label>
        <textarea
          id="answer"
          className={styles.textarea}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter the answer..."
          rows={3}
          required
        />
      </div>
      <div className={styles.formActions}>
        <button className={styles.btnSecondary} onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.btnPrimary} onClick={handleSubmit}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateFlashcardForm;
