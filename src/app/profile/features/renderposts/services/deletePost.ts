import { setLoading, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { GetUserData } from "../../services/getUserData";

export async function DeletePost(postId: number) {
  try {
    const res = await GetNewAccessToken("/api/deletepost", {
      method: "POST",
      body: JSON.stringify(postId),
    });
    if (res?.ok) {
      const { id } = await res.json();
      await GetUserData(String(id));
      store.dispatch(setLoading(false));
    }
  } catch (err) {
    console.log(err);
  }
}
