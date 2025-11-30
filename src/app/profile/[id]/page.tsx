"use client";

import ProfileNavBar from "../features/components/navbar";
import CreatePost from "../features/createPost/components/createPost";
import RenderPosts from "../features/renderposts/components/renderPosts";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loading from "./loading";
import { GetUserData } from "../features/services/getUserData";
import { UserComponent } from "../features/components/userComponent";

export default function Profile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const { loading } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    GetUserData(id);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <main className="bg-gray-100  h-screen overflow-y-auto">
      <ProfileNavBar page="home" />
      <section className="flex ml-47 mt-8 gap-6">
        <UserComponent />
        <div>
          <CreatePost />
          <RenderPosts userId={id} />
        </div>
      </section>
    </main>
  );
}
