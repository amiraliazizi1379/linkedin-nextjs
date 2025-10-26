import { useRef } from "react";

export function useCreatePost() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImgBt = () => {
    fileInputRef.current?.click();
  };

  return {
    fileInputRef,
    handleImgBt,
  };
}
