import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { GetComments } from "./getcomment";
import { setBtnLoading, setCommentText, store } from "@/redux/store";

export async function handleComment(
  e: React.MouseEvent<HTMLButtonElement>,
  postId: number,
  postImg: File | null
) {
  const { commentText } = store.getState().app;
  if (commentText || postImg) {
    store.dispatch(setBtnLoading(true));
    e.preventDefault();
    const formData = new FormData();
    if (postImg) formData.append("img", postImg);
    formData.append("text", commentText);

    try {
      const res = await GetNewAccessToken(
        `/api/addcomment`,
        {
          method: "POST",
          headers: { postId: postId },
          body: formData,
        }
      );
      GetComments(postId);
      store.dispatch(setBtnLoading(false));
      store.dispatch(setCommentText(""));
    } catch (err) {
      console.log(err);
    }
  }
}
