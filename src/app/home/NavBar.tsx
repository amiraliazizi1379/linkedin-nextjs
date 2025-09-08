import Logo from "../../components/logo";
import Options from "./options";
import { data } from "./data/data";

export default function NavBar() {
  return (
    <nav className=" flex items-center mt-4 max-[1023px]:grid  max-[1023px]:grid-cols-2">
      <Logo className="text-[#0a66c2] w-[110px] ml-38 max-[640px]:ml-4 max-[1150px]:ml-12" />

      <Options datas={data} styles="min-[1023px]:ml-auto" />
      <div className="flex w-[225px] gap-2 ml-6 mr-[9.5rem] max-[1150px]:ml-0 max-[1150px]:mr-8 max-[540px]:translate-x-[-2rem] max-[410px]:translate-x-[-4rem] max-[347px]:translate-x-[-6rem] max-[957px]:translate-x-[12rem] max-[862px]:translate-x-[9rem] max-[779px]:translate-x-[6rem] max-[700px]:translate-x-[4rem] max-[640px]:translate-x-[2rem] max-[1023px]:translate-x-[15rem]">
        <a href="/register" className=" text-gray-600 nav-bt-signin  ">
          join now
        </a>
        <a
          href="/login"
          className=" nav-bt-signin border text-[#0a66c2] hover:text-[#39597a] "
        >
          Sign in
        </a>
      </div>
    </nav>
  );
}
