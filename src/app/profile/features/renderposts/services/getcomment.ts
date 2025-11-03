import {
  setCommentImgSrc,
  setCommentText,
  setPostData,
  store,
} from "@/redux/store";

import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function GetComments(id: number) {
  const postData = store.getState().app.postData;

  let updatedData = postData.map((post) =>
    post.comment === true ? { ...post, comment: false } : post
  );

  updatedData = updatedData.map((post) =>
    post.post_id === id ? { ...post, comment: true } : post
  );
  store.dispatch(setCommentText(""));
  store.dispatch(setCommentImgSrc(""));
  store.dispatch(setPostData(updatedData));
  try {
    const res = await GetNewAccessToken("/api/getcomments", {
      method: "GET",
      headers: { postId: id },
    });
    const result = await res?.json();
    updatedData = updatedData.map((post) =>
      post.post_id === id ? { ...post, commentData: result.commentData } : post
    );
    store.dispatch(setPostData(updatedData));
  } catch (err) {
    console.log(err);
  }
}
