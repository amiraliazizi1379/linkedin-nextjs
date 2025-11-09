import { setBtnLoading, setCreatePost, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function handlePost(
  e: React.MouseEvent<HTMLButtonElement>,
  postImgFile: File | null
) {
  const { postText } = store.getState().app;

  if (postText || postImgFile) {
    store.dispatch(setBtnLoading(true));
    e.preventDefault();
    const formData = new FormData();
    if (postImgFile) formData.append("img", postImgFile);
    formData.append("text", postText);

    try {
      const res = await GetNewAccessToken("/api/posts", {
        method: "POST",
        body: formData,
      });

      store.dispatch(setCreatePost(false));
      store.dispatch(setBtnLoading(false));
    } catch (err) {
      console.log(err);
    }
  }
}
