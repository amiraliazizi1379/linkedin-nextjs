"use client";
import { useEffect } from "react";
import ProfileNavBar from "../features/components/navbar";
import { GetUsers } from "./services/getusers";
import { RenderUsers } from "./component/renderUsers";
import { GetUserData } from "../features/services/getUserData";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLoading, setPopup } from "@/redux/store";
import Loading from "../[id]/loading";

export default function MyNetwork() {
  const { popup, loading } = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    GetUserData('myNetwork');
    GetUsers();
    dispatch(setLoading(false));
  }, []);

  if (loading) return <Loading />;
  return (
    <div
      className="bg-gray-100 h-screen overflow-auto"
      onClick={() => {
        if (popup) dispatch(setPopup(false));
      }}
    >
      <ProfileNavBar page="network" />
      <RenderUsers />
    </div>
  );
}
