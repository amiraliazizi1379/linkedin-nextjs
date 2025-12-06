import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import UserImageComponent from "./userImgComponent";

export function UserComponent() {
  const { userData } = useSelector((state: RootState) => state.app);
  const { id, email, name, bio, image } = userData;
  console.log(userData);
  return (
    <div className="w-[250px] h-[220px] bg-[#fff] border-1 border-gray-300 rounded-md relative">
      <div className="flex h-[70px]">
        <div className="w-[70%] bg-gray-200">
          <div className="w-[90%] bg-[#636e72] rounded-r-3xl h-full"></div>
        </div>
        <div className="w-[30%] bg-[#b2bec3]"></div>
      </div>
      <UserImageComponent
        style="w-[80px] h-[80px] mx-auto mt-2 absolute left-1 top-4"
        email={email}
        image={image}
        name={name}
      />
      <h1 className="font-semibold mt-4">{name ? name : email}</h1>
      <p>{bio && bio}</p>
    </div>
  );
}
