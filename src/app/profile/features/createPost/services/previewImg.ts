import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

export function handleImgInput(
  e: ChangeEvent<HTMLInputElement>,
  setPostImg: Dispatch<SetStateAction<File | null>>,
  setSrcImg: Dispatch<SetStateAction<string>>
) {
  const file = e.target.files?.[0];
  if (file) {
    setPostImg(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSrcImg(reader.result as string);
    };

    reader.readAsDataURL(file);
  }
}
