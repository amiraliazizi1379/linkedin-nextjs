import { setUserData, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { GetUserData } from "./getUserData";

export async function DeleteProfilePhotoHandler() {
  try {
    const res = await GetNewAccessToken("/api/deleteprofilephoto", {
      method: "POST",
    });
    if (res?.ok) {
      const { id } = await res.json();
      GetUserData(String(id));
    }
  } catch (err) {
    console.log(err);
  }
}
