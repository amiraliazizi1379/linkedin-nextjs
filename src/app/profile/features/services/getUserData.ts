import { setLoading, setUserData, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function GetUserData(id: string) {
  store.dispatch(setLoading(true));
  try {
    const res = await GetNewAccessToken(`/api/user`, {
      method: "POST",
      body: id,
    });
    const result = await res?.json();
    if (res?.status === 403) window.location.href = `/profile/${result.id}`;
    store.dispatch(setUserData(result.userData));
  } catch (err) {
    console.log(err);
  }
}
