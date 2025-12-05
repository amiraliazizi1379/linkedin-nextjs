import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import UserImageComponent from "./userImgComponent";

export function UserComponent() {
  const { userData } = useSelector((state: RootState) => state.app);
  const { id, email, name, bio, image } = userData;
  console.log(userData)
  return (
    <div className="w-[250px] h-[220px] bg-[#fff] p-4  border-1 border-gray-300 rounded-md">
      <div className="flex">
        <div className="w-[60%] bg-gray-600 rounded-full"></div>
        <div className="w-[10%] bg-gray-200"></div>
        <div className="w-[30%] bg-gray-400"></div>
      </div>
      <UserImageComponent
        style="w-[80px] h-[80px] mx-auto mt-2"
        email={email}
        image={image}
        name={name}
      />
      <h1 className="font-semibold mt-4">{name ? name : email}</h1>
      <p>{bio && bio}</p>
    </div>
  );
}
