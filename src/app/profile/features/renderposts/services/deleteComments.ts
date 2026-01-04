import {
  setBtnLoading,
  setDeleteVerification,
  setLoading,
  setPostData,
  store,
} from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { GetComments } from "./getcomment";
import { commentDataType } from "@/types/commentDataType";
import { postdatas } from "@/types/postDataType";

export async function DeleteComment() {
  const { postData } = store.getState().app;
  const comment = postData
    .flatMap((post: postdatas) => post.commentData || [])
    .find((cmnt: commentDataType) => cmnt.activeCommentOption);

  if (comment) {
    try {
      const res = await GetNewAccessToken("/api/deleteComment", {
        method: "POST",
        body: JSON.stringify({ commentId: comment.comment_id }),
      });
      if (res?.ok) {
        await GetComments(comment.post_id);
        store.dispatch(setLoading(false));
      }

      store.dispatch(setBtnLoading(false));
      store.dispatch(setDeleteVerification(""));
      const newPostData = postData.map((post) => ({
        ...post,
        commentData: post.commentData.map((cmnt) =>
          cmnt.activeCommentOption
            ? { ...cmnt, activeCommentOption: false }
            : cmnt
        ),
      }));
      store.dispatch(setPostData(newPostData));
    } catch (err) {
      console.log(err);
    }
  }
}
