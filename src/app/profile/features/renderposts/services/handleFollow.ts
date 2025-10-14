import { setPostData, store } from "@/app/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function handleFollow(id: number, is_following: boolean) {
  const postData = store.getState().app.postData;
  let updatedData = postData.map((post) =>
    post.user_id === id ? { ...post, is_following: !post.is_following } : post
  );
  store.dispatch(setPostData(updatedData));

  try {
    if (!is_following) {
      const res = await GetNewAccessToken("/api/registerfollow", {
        method: "POST",
        body: JSON.stringify(id),
      });
    } else {
      const res2 = await GetNewAccessToken("/api/registerfollow", {
        method: "DELETE",
        body: JSON.stringify(id),
      });
    }
  } catch {
    updatedData = updatedData.map((post) =>
      post.user_id === id ? { ...post, is_following: !post.is_following } : post
    );
    store.dispatch(setPostData(updatedData));
  }
}
