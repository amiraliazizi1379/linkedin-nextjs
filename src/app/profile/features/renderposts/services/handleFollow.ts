import { setAllUsers, setPostData, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function handleFollow(id: number, is_following: boolean) {
  const { postData, allUsers } = store.getState().app;
  let updatedData = postData.map((post) =>
    post.user_id === id ? { ...post, is_following: !post.is_following } : post
  );
  store.dispatch(setPostData(updatedData));

  let updated = allUsers.map((prev) =>
    id === prev.id ? { ...prev, is_following: !prev.is_following } : prev
  );
  store.dispatch(setAllUsers(updated));

  try {
    if (!is_following) {
      const res = await GetNewAccessToken(
        `${process.env.DOMAIN}/api/registerfollow`,
        {
          method: "POST",
          body: JSON.stringify(id),
        }
      );
    } else {
      const res2 = await GetNewAccessToken(
        `${process.env.DOMAIN}/api/registerfollow`,
        {
          method: "DELETE",
          body: JSON.stringify(id),
        }
      );
    }
  } catch {
    updatedData = updatedData.map((post) =>
      post.user_id === id ? { ...post, is_following: !post.is_following } : post
    );
    store.dispatch(setPostData(updatedData));

    updated = allUsers.map((prev) =>
      id === prev.id ? { ...prev, is_following: !prev.is_following } : prev
    );
    store.dispatch(setAllUsers(updated));
  }
}
