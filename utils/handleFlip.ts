import { Dispatch, SetStateAction } from "react";

export const handleFlip = (
  setIsFlipped: Dispatch<SetStateAction<boolean>>,
  isFlipped: boolean
) => {
  setIsFlipped(!isFlipped);
};
