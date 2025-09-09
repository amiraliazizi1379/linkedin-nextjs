import Options from "@/app/home/options";
import Logo from "@/components/logo";
import { IoMdSearch } from "react-icons/io";
import UserImageComponent from "../components/userImgComponent";
import { data } from "../datas/data";
import { useUserContext } from "@/context/useContext";

export default function ProfileNavBar() {
  const { popup, setPopup } = useUserContext();

  return (
    <nav className="flex items-center justify-around p-2 bg-[#fff]">
      <div className="flex items-center w-[500px] space-x-2 relative">
        <Logo
          className="text-[#0a66c2]"
          logoComponent="text-4xl"
          textstyles="min-[300px]:hidden"
        />

        <IoMdSearch className="absolute left-14 font-bold" />
        <input
          type="text"
          placeholder="Search"
          className=" py-1 px-10 profile-inputs"
        />
      </div>
      <article className="flex items-center gap-8">
        <Options datas={data} items="text-2xl" />
        <button
          onClick={() => setPopup(!popup)}
          className="cursor-pointer flex-center flex-col hover:text-[#171717] text-[12px]"
        >
          <UserImageComponent style="w-[25px] h-[25px] text-[11px]" />
          Me
        </button>
      </article>
    </nav>
  );
}
