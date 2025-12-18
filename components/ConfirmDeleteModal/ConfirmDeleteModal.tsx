"use client";

import Modal from "../Modal/Modal";
import type { ConfirmDeleteModalProps } from "./ConfirmDeleteModal.types";
import styles from "./ConfirmDeleteModal.module.css";

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <div className={styles.confirmModal}>
        <h3 className={styles.confirmTitle}>Delete Flashcard</h3>
        <p className={styles.confirmMessage}>
          Are you sure you want to delete this flashcard? This action cannot be
          undone.
        </p>
        <div className={styles.confirmActions}>
          <button className={styles.btnSecondary} onClick={onCancel}>
            Return
          </button>
          <button className={styles.btnDanger} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ConfirmDeleteModal;
