"use client";

import { useState } from "react";
import cn from "classnames";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import type { FlashcardComponentProps } from "./FlashcardComponent.types";
import { handleDeleteClick } from "@/utils/handleDeleteClick";
import { handleFlip } from "@/utils/handleFlip";
import { handleConfirmDelete } from "@/utils/handleConfirmDelete";
import styles from "./FlashcardComponent.module.css";

const FlashcardComponent: React.FC<FlashcardComponentProps> = ({
  flashcard,
  onDelete,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className={styles.flashcardWrapper}>
        <button
          className={styles.deleteBtn}
          onClick={(e) => handleDeleteClick(e, setShowDeleteModal)}
          aria-label="Delete flashcard"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 3h6M3 5h14M17 5l-.867 11.268A2 2 0 0114.138 18H5.862a2 2 0 01-1.995-1.732L3 5m5 4v5m4-5v5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={cn(styles.flashcard, {
            [styles.flipped]: isFlipped,
          })}
          onClick={() => handleFlip(setIsFlipped, isFlipped)}
        >
          <div className={styles.flashcardInner}>
            <div className={styles.flashcardFront}>
              <div className={styles.cardLabel}>Question</div>
              <div className={styles.cardContent}>
                {flashcard.question}
              </div>
              <div className={styles.cardHint}>Click to flip</div>
            </div>

            <div className={styles.flashcardBack}>
              <div className={styles.cardLabel}>Answer</div>
              <div className={styles.cardContent}>
                {flashcard.answer}
              </div>
              <div className={styles.cardHint}>Click to flip back</div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={showDeleteModal}
        onConfirm={() =>
          handleConfirmDelete(onDelete, setShowDeleteModal, flashcard)
        }
        onCancel={() => setShowDeleteModal(false)}
      />
    </>
  );
};

export default FlashcardComponent;
