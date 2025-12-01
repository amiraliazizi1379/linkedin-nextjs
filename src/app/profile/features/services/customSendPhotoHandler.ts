import {
  setBtnLoading,
  setEditEmailStatus,
  setLoading,
  store,
} from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { GetUserData } from "./getUserData";

export async function CustomHandler(
  e: React.MouseEvent<HTMLButtonElement>,
  postImageFile: File | null,
  setState: ActionCreatorWithPayload<boolean>,
  route: string
) {
  const {
    userData,
    postText,
    commentText,
    editedBio,
    editedEmail,
    editedUserName,
    postBt,
  } = store.getState().app;
  const { bio, name, email } = userData;

  if (postBt || postImageFile) {
    store.dispatch(setBtnLoading(true));
    e.preventDefault();
    const formData = new FormData();
    if (postImageFile) formData.append("img", postImageFile);
    if (postText) formData.append("posttext", postText);
    if (commentText) formData.append("commenttext", commentText);
    if (editedBio !== bio) formData.append("bio", editedBio);
    if (editedEmail !== email) formData.append("email", editedEmail);
    if (editedUserName !== name) formData.append("name", editedUserName);

    try {
      const res = await GetNewAccessToken(`/api/${route}`, {
        method: "POST",
        body: formData,
      });
      if (res?.status === 403) {
        store.dispatch(setBtnLoading(false));
        store.dispatch(setEditEmailStatus(true));
      }

      if (res?.ok) {
        const { id } = await res.json();
        store.dispatch(setEditEmailStatus(false));
        store.dispatch(setState(false));
        store.dispatch(setBtnLoading(false));
        await GetUserData(String(id));
        store.dispatch(setLoading(false));
      }
    } catch (err) {
      console.log(err);
    }
  }
}
