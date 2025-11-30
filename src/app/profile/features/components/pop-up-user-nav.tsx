import { useDispatch, useSelector } from "react-redux";
import { handlelogout } from "../services/handleLogout";
import UserImageComponent from "./userImgComponent";
import { RootState, setEditProfile, setPopup } from "@/redux/store";

export default function PopOp() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.app);
  const { name, image, email, bio } = userData;
  return (
    <div>
      <div
        className="fixed inset-0 z-50 bg-black opacity-50"
        onClick={() => dispatch(setPopup(false))}
      ></div>
      <section className="min-w-[250px] p-2 shadow-md right-[11rem] top-[4.5rem] rounded-md fixed z-50 min-h-[150px] bg-[#fff]">
        <div className="flex gap-4">
          <UserImageComponent
            style="w-[50px] h-[50px] text-xl"
            name={name}
            image={image}
            email={email}
            dontShowLarg
          />
          <div>
            <h3 className="font-semibold">{name ? name : email}</h3>
            <p className="text-[12px]">{bio}</p>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(setEditProfile(true));
            dispatch(setPopup(false));
          }}
          className="border-1 border-[#0a66c2] cursor-pointer hover:border-2 hover:bg-[#eaf4fd] h-[1.5rem] w-full mt-2 text-[#0a66c2] text-[13px] font-semibold rounded-full"
        >
          View Profile
        </button>
        <button
          className="cursor-pointer text-left text-[14px] mt-2 w-full py-2 hover:underline border-t-1 border-gray-300"
          onClick={handlelogout}
        >
          Sign Out
        </button>
      </section>
    </div>
  );
}
