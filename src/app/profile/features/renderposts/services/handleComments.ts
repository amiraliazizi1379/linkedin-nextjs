import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { Dispatch, SetStateAction } from "react";
import { postdatas } from "@/context/useContext";
import { GetComments } from "./getcomment";
import { commentDataType } from "@/context/useContext";

export async function handleComment(
  e: React.MouseEvent<HTMLButtonElement>,
  postId: number,
  commentText: string,
  postImg: File | null,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setPostData: Dispatch<SetStateAction<postdatas[]>>,
  setCommentData : Dispatch<SetStateAction<commentDataType[]>>
) {
  if (commentText || postImg) {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    if (postImg) formData.append("img", postImg);
    formData.append("text", commentText);

    try {
      const res = await GetNewAccessToken("/api/addcomment", {
        method: "POST",
        headers: { postId: postId },
        body: formData,
      });
      GetComments(postId, setPostData, false , setCommentData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
}
