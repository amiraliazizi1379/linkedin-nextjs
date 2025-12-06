import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import UserImageComponent from "./userImgComponent";

export function UserComponent() {
  const { userData } = useSelector((state: RootState) => state.app);
  const { id, email, name, bio, image } = userData;
  console.log(userData);
  return (
    <div className="w-[250px] h-[220px] bg-[#fff] border-1 border-gray-300 rounded-xl relative">
      <div className="flex h-[70px]">
        <div className="w-[70%] bg-gray-200">
          <div className="w-[90%] bg-[#b2bec3] rounded-r-4xl h-full"></div>
        </div>
        <div className="w-[30%] bg-[#b2bec3]"></div>
      </div>
      <UserImageComponent
        style="w-[80px] h-[80px] border-2 border-[#fff] absolute left-4 top-8"
        email={email}
        image={image}
        name={name}
      />
      <h1 className="font-semibold mt-10">{name ? name : email}</h1>
      <p>{bio && bio}</p>
    </div>
  );
}
