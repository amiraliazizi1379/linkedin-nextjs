import {
  setBtnLoading,
  setDeleteVerification,
  setLoading,
  setPostData,
  store,
} from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { RenderPostsServices } from "./renderpostsServices";

export async function DeletePost(postId: number) {
  try {
    console.log('delete post file log :  ' , postId)
    const res = await GetNewAccessToken("/api/deletepost", {
      method: "POST",
      body: JSON.stringify({ postId: postId }),
    });
    if (res?.ok) {
      await RenderPostsServices();
      store.dispatch(setLoading(false));
    }
    const { postData } = store.getState().app;
    store.dispatch(setBtnLoading(false));
    store.dispatch(setDeleteVerification(false));
    const newPostData = postData.map((post) => ({
      ...post,
      activePostOptions: false,
    }));
    store.dispatch(setPostData(newPostData));
  } catch (err) {
    console.log(err);
  }
}
