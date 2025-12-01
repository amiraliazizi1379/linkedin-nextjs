import UserImageComponent from "../userImgComponent";
import { CustomHandler } from "../../services/customSendPhotoHandler";
import { LargPreviewImg } from "../../renderposts/components/largPreviewImg";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  setEditMenu,
  setEditProfile,
  setPostBt,
} from "@/redux/store";
import { CustomActionBtn } from "../../createPost/components/customActionBt";
import { CloseButton } from "../closeButton";
import { EditUserInfo } from "./userInfoComp";
import { useUserContext } from "@/context/context";
import { EditOptions } from "./editOptions";
import { BsThreeDotsVertical } from "react-icons/bs";

export function EditProfile() {
  const dispatch = useDispatch();
  const { editProfile, userData, largImg, userImgSrc, editMenu } = useSelector(
    (state: RootState) => state.app
  );

  const { postImgFile, setPostImgFile } = useUserContext();

  if (largImg) {
    return <LargPreviewImg />;
  }

  if (editProfile) {
    return (
      <article>
        <div
          className="fixed inset-0 z-50 bg-black opacity-50"
          onClick={() => {
            dispatch(setEditProfile(false));
            dispatch(setPostBt(false));
            dispatch(setEditMenu(false));
          }}
        ></div>
        <div
          onClick={() => {
            if (editMenu) dispatch(setEditMenu(false));
          }}
          className="fixed w-[30vw] min-h-[30vh] bg-[#fff] left-[33rem] z-50 rounded-lg p-5"
        >
          <section className="flex justify-between items-center mt-2">
            <h1 className="font-semibold text-md">My Profile</h1>
            <div className="space-x-1 flex-center">
              <button
                onClick={() => dispatch(setEditMenu(!editMenu))}
                className="text-2xl custom-side-bt"
              >
                <BsThreeDotsVertical />
              </button>
              <CloseButton setCustomState={setEditProfile} />
            </div>
          </section>

          <EditOptions />
          <div className="flex justify-center gap-8 mt-6 relative">
            {userData && (
              <UserImageComponent
                style="w-[140px] h-[140px] text-xl"
                image={userData.image}
                name={userData.name}
                email={userData.email}
              />
            )}
          </div>
          <div className="flex-center mt-[1.3rem] gap-4"></div>
          <EditUserInfo />
          <CustomActionBtn
            name="Save"
            classname="border-none mt-4"
            ImgSrc={userImgSrc}
            onclick={(e) =>
              CustomHandler(e, postImgFile, setEditProfile, "editUserInfo" , setPostImgFile)
            }
          />
        </div>
      </article>
    );
  }
}
