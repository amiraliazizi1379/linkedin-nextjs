import {
  setBtnLoading,
  setDeleteVerification,
  setLoading,
  setPostData,
  store,
} from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { RenderPostsServices } from "./renderpostsServices";

export async function DeletePost() {
  const { postData } = store.getState().app;
  const post = postData.find((post) => post.activePostOptions);
  try {
    const res = await GetNewAccessToken("/api/deletepost", {
      method: "POST",
      body: JSON.stringify({ postId: post?.post_id }),
    });
    if (res?.ok) {
      await RenderPostsServices();
      store.dispatch(setLoading(false));
    }
    const { postData } = store.getState().app;
    store.dispatch(setBtnLoading(false));
    store.dispatch(setDeleteVerification(""));
    const newPostData = postData.map((post) => ({
      ...post,
      activePostOptions: false,
    }));
    store.dispatch(setPostData(newPostData));
  } catch (err) {
    console.log(err);
  }
}
