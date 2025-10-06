import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { Dispatch, SetStateAction } from "react";

export async function handlePost(
  e: React.MouseEvent<HTMLButtonElement>,
  postText: string,
  postImg: File | null,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setCreatePost: Dispatch<SetStateAction<boolean>>
) {
  if (postText || postImg) {
    setLoading(true);
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
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
}
