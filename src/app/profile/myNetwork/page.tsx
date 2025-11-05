"use client";
import { useEffect } from "react";
import ProfileNavBar from "../features/components/navbar";
import { GetUsers } from "./services/getusers";
import { RenderUsers } from "./component/renderUsers";
import { GetUserData } from "../features/services/getUserData";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLoading, setPopup } from "@/redux/store";

export default function MyNetwork() {
  useEffect(() => {
    GetUsers();
  }, []);
  const { popup, userData , allUsers } = useSelector((state: RootState) => state.app);
  const userId = String(userData.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    GetUserData(userId);
    dispatch(setLoading(false));
  }, []);
  return (
    <div
      className="bg-gray-100 h-screen overflow-auto"
      onClick={() => {
        if (popup) dispatch(setPopup(false));
      }}
    >
      <ProfileNavBar page="network"/>
      <RenderUsers />
    </div>
  );
}
