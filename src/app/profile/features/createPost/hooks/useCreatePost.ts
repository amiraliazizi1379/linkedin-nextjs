import { ChangeEvent, useRef, useState } from "react";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { useUserContext } from "@/context/useContext";

export function useCreatePost() {
  const { createPost, setCreatePost } = useUserContext();
  const [postBt, setPostBt] = useState(false);
  const [postImg, setPostImg] = useState<File | null>(null);
  const [postText, setPostText] = useState("");
  const [srcImg, setSrcImg] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleImgBt = () => {
    fileInputRef.current?.click();
  };

  function handleImgInput(e: ChangeEvent<HTMLInputElement>) {
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

  async function handlePost(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const formData = new FormData();
    if (postImg) formData.append("img", postImg);
    formData.append("text", postText);

    try {
      const res = await GetNewAccessToken("/api/posts", {
        method: "POST",
        body: formData,
      });

      setCreatePost(false);
    } catch (err) {
      console.log(err);
    }
  }
  return {
    postBt,
    setPostBt,
    postImg,
    setPostImg,
    postText,
    setPostText,
    srcImg,
    setSrcImg,
    fileInputRef,
    handleImgBt,
    handleImgInput,
    handlePost
  };
}
