import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { contextType } from "@/context/useContext";

export async function handleLikes(
  id: number,
  liked: boolean | undefined,
  setPostData: contextType["setPostData"]
) {
  setPostData((pre) =>
    pre.map((post) =>
      post.post_id === id ? { ...post, liked: !post.liked } : post
    )
  );

  try {
    if (!liked) {
      const res = await GetNewAccessToken("/api/registerlike", {
        method: "POST",
        body: JSON.stringify(id),
      });
    } else {
      const res2 = await GetNewAccessToken("/api/registerlike", {
        method: "DELETE",
        body: JSON.stringify(id),
      });
    }
  } catch {
    setPostData((pre) =>
      pre.map((post) =>
        post.post_id === id ? { ...post, liked: !post.liked } : post
      )
    );
  }
}
