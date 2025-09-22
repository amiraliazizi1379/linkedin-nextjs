"use client";

import { GetNewAccessToken } from "../../../utils/getNewAccessToken";
import ProfileNavBar from "../features/navbar";
import CreatePost from "../features/createPost/components/createPost";
import PopOp from "../features/pop-up-user-nav";
import CreatePostComponent from "../features/createPost/components/createPostComponent";
import RenderPosts from "../features/renderposts/components/renderPosts";
import { useEffect } from "react";
import { useUserContext } from "@/context/useContext";

export default function Profile() {
  const { popup, setPopup } = useUserContext();

  useEffect(() => {
    const res = async () => {
      try {
        const res = await GetNewAccessToken("http://localhost:3000/api/user", {
          method: "GET",
        });
      } catch (err) {
        console.log(err);
      }
    };
    res();
  }, []);

  return (
    <main
      onClick={() => {
        if (popup) setPopup(false);
      }}
      className="bg-gray-100  h-screen overflow-y-auto"
    >
      <ProfileNavBar />
      {popup && <PopOp />}
      <CreatePost />
      <CreatePostComponent />
      <RenderPosts />
    </main>
  );
}
