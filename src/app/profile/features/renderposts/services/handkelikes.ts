import { setPostData, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function handleLikes(id: number, liked: boolean | undefined) {
  const postData = store.getState().app.postData;
  let updatedData = postData.map((post) =>
    post.post_id === id ? { ...post, liked: !post.liked } : post
  );
  store.dispatch(setPostData(updatedData));
  try {
    if (!liked) {
      const res = await GetNewAccessToken(
        `/api/registerlike`,
        {
          method: "POST",
          body: JSON.stringify(id),
        }
      );
    } else {
      const res2 = await GetNewAccessToken(
        `/api/registerlike`,
        {
          method: "DELETE",
          body: JSON.stringify(id),
        }
      );
    }
  } catch {
    updatedData = updatedData.map((post) =>
      post.post_id === id ? { ...post, liked: !post.liked } : post
    );
    store.dispatch(setPostData(updatedData));
  }
}
