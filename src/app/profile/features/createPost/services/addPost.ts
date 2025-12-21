import {
  setBtnLoading,
  setCreatePost,
  setLoading,
  setPostText,
  store,
} from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { RenderPostsServices } from "../../renderposts/services/renderpostsServices";

export async function handlePost(
  e: React.MouseEvent<HTMLButtonElement>,
  postImgFile: File | null,
  edit?: boolean,
  postId?: number
) {
  const { postText } = store.getState().app;

  if (postText || postImgFile) {
    store.dispatch(setBtnLoading(true));
    e.preventDefault();
    const formData = new FormData();
    if (postImgFile) formData.append("img", postImgFile);
    formData.append("text", postText);

    try {
      const res = await GetNewAccessToken(`/api/posts`, {
        method: edit ? "UPDATE" : "POST",
        headers: { id: String(postId) },
        body: formData,
      });
      if (res?.ok) {
        store.dispatch(setLoading(true));
        RenderPostsServices();
        store.dispatch(setPostText(""));
        store.dispatch(setCreatePost(false));
        store.dispatch(setBtnLoading(false));
      }
    } catch (err) {
      console.log(err);
    }
  }
}
