"use client";

import { useState } from "react";
import type { CreateFlashcardFormProps } from "./CreateFlashcardForm.types";
import { Flashcard } from "@/types/interface";
import { handleInputChange } from "@/utils/handleInputChange";
import { handleSubmit } from "@/utils/handleSubmit";
import styles from "./CreateFlashcardForm.module.css";

const CreateFlashcardForm: React.FC<CreateFlashcardFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Omit<Flashcard, "id">>({
    question: "",
    answer: "",
  });

  const { question, answer } = formData;

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
          name="question"
          onChange={(e) => handleInputChange(e, setFormData)}
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
          name="answer"
          onChange={(e) => handleInputChange(e, setFormData)}
          placeholder="Enter the answer..."
          rows={3}
          required
        />
      </div>
      <div className={styles.formActions}>
        <button className={styles.btnSecondary} onClick={onCancel}>
          Cancel
        </button>
        <button
          className={styles.btnPrimary}
          onClick={() => handleSubmit(question, answer, onSubmit, setFormData)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateFlashcardForm;
