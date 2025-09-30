import { contextType } from "@/context/useContext";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function handleFollow(
  id: number,
  is_following: boolean,
  setPostData: contextType["setPostData"]
) {
  setPostData((pre) =>
    pre.map((post) =>
      post.user_id === id ? { ...post, is_following: !post.is_following } : post
    )
  );

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
    setPostData((pre) =>
      pre.map((post) =>
        post.user_id === id
          ? { ...post, is_following: !post.is_following }
          : post
      )
    );
  }
}
