import { Dispatch, SetStateAction } from "react";

export const handleDeleteClick = (
  e: React.MouseEvent,
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>
) => {
  e.stopPropagation();
  setShowDeleteModal(true);
};
