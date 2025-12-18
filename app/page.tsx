"use client";

import { useState } from "react";
import CreateFlashcardForm from "@/components/CreateFlashcardForm/CreateFlashcardForm";
import FlashcardComponent from "@/components/FlashcardComponent/FlashcardComponent";
import Modal from "@/components/Modal/Modal";
import useLocalStorage from "@/hooks/useLocalStorage";
import type { Flashcard } from "@/types/interface";
import { handleCreateFlashcard } from "@/utils/handleCreateFlashcard";
import { handleDeleteFlashcard } from "@/utils/handleDeleteFlashcard";
import styles from "./home.module.css";

export default function Home() {
  const [flashcards, setFlashcards] = useLocalStorage<Flashcard[]>(
    "flashcards",
    []
  );
  const [showCreateForm, setShowCreateForm] = useState(false);

  // console.log('main state:', flashcards);
  

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Flashcard Study App</h1>
        <p className={styles.subtitle}>
          Create, study, and master your flashcards
        </p>
      </header>

      <div className={styles.createBtnWrapper}>
        <button
          className={styles.createBtn}
          onClick={() => setShowCreateForm(true)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Create Flashcard
        </button>
      </div>

      {flashcards.length === 0 ? (
        <div className="emptyState">
          <div className="emptyIcon">📚</div>
          <h2 className="emptyTitle">No flashcards yet</h2>
          <p className="emptyText">
            Click the &quot;Create Flashcard&quot; button to get started!
          </p>
        </div>
      ) : (
        <div className={styles.flashcardsGrid}>
          {flashcards.map((flashcard) => (
            <FlashcardComponent
              key={flashcard.id}
              flashcard={flashcard}
              onDelete={(id) =>
                handleDeleteFlashcard(id, setFlashcards, flashcards)
              }
            />
          ))}
        </div>
      )}

      <Modal isOpen={showCreateForm} onClose={() => setShowCreateForm(false)}>
        <CreateFlashcardForm
          onSubmit={(question, answer) =>
            handleCreateFlashcard(
              question,
              answer,
              setFlashcards,
              setShowCreateForm,
              flashcards
            )
          }
          onCancel={() => setShowCreateForm(false)}
        />
      </Modal>
    </div>
  );
}
