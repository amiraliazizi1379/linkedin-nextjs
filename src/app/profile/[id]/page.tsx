"use client";

import ProfileNavBar from "../features/components/navbar";
import CreatePost from "../features/createPost/components/createPost";
import RenderPosts from "../features/renderposts/components/renderPosts";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setPopup } from "@/redux/store";
import Loading from "./loading";
import { GetUserData } from "../features/services/getUserData";
import { UserComponent } from "../features/components/userComponent";

export default function Profile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const dispatch = useDispatch();
  const { popup, loading, postData } = useSelector(
    (state: RootState) => state.app
  );

  useEffect(() => {
    GetUserData(id);
  }, [id]);
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
      <ProfileNavBar page="home" />
      <section className="flex justify-center mt-8">
        <UserComponent />
        <CreatePost />
      </section>
      <RenderPosts userId={id} />
    </main>
  );
}
