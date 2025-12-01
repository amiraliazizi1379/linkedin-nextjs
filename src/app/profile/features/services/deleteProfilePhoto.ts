import { setUserData, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { GetUserData } from "./getUserData";

export async function DeleteProfilePhotoHandler() {
  try {
    const res = await GetNewAccessToken("/api/deleteprofilephoto", {
      method: "UPDATE",
    });
  } catch (err) {
    console.log(err);
  }
}
