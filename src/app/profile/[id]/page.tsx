"use client";

import { GetNewAccessToken } from "../../../utils/getNewAccessToken";
import ProfileNavBar from "../features/components/navbar";
import CreatePost from "../features/createPost/components/createPost";
import CreatePostComponent from "../features/createPost/components/createPostComponent";
import RenderPosts from "../features/renderposts/components/renderPosts";
import React, { useEffect } from "react";
import PopOp from "../features/components/pop-up-user-nav";
import { EditProfile } from "../features/components/editProfileCom/editProfile";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  setLoading,
  setPopup,
  setUserData,
} from "../../redux/store";
import Loading from "./loading";

export default function Profile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const dispatch = useDispatch();
  const { popup, loading } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    const res = async () => {
      dispatch(setLoading(true));
      try {
        const res = await GetNewAccessToken("http://localhost:3000/api/user", {
          method: "POST",
          body: id,
        });
        const result = await res?.json();
        if (res?.status === 403) window.location.href = `/profile/${result.id}`;
        dispatch(setUserData(result.userData));
      } catch (err) {
        console.log(err);
      }
    };
    res();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <main
      onClick={() => {
        if (popup) dispatch(setPopup(false));
      }}
      className="bg-gray-100  h-screen overflow-y-auto"
    >
      <ProfileNavBar />
      {popup && <PopOp />}
      <EditProfile />
      <CreatePost />
      <CreatePostComponent />
      <RenderPosts userId={id} />
    </main>
  );
}
