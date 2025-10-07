import { contextType, postdatas } from "@/context/useContext";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function GetComments(
  id: number,
  setPostData: contextType["setPostData"],
  status: boolean
) {
  setPostData((pre) =>
    pre.map((post) =>
      post.post_id === id ? { ...post, comment: status } : post
    )
  );
  try {
    const res = await GetNewAccessToken("/api/getcomments", {
      method: "GET",
      headers: { postId: id },
    });
    const result = await res?.json();
    setPostData((pre) =>
      pre.map((post) =>
        post.post_id === id
          ? { ...post, commentData: result.commentData }
          : post
      )
    );
  } catch (err) {
    console.log(err);
  }
}
