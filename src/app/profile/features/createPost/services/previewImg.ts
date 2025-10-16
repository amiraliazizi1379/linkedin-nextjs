import { store } from "@/app/redux/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export function handleImgInput(
  e: ChangeEvent<HTMLInputElement>,
  setPostImgFile: Dispatch<SetStateAction<File | null>>,
  setState: ActionCreatorWithPayload<string>
) {
  const file = e.target.files?.[0];
  if (file) {
    setPostImgFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      store.dispatch(setState(reader.result as string));
    };

    reader.readAsDataURL(file);
  }
}
