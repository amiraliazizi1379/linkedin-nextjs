import { setAllUsers, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function GetUsers() {
  try {
    const res = await GetNewAccessToken("/api/getAllUsers", {
      method: "GET",
    });
    const result = await res?.json();
    store.dispatch(setAllUsers(result.data));
  } catch (err) {
    console.log(err);
  }
}
