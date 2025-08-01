import { FaLaptop } from "react-icons/fa";
import {
  BsFillRocketTakeoffFill,
  BsFillPuzzleFill,
  BsCollectionPlayFill,
} from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import Logo from "../../components/logo";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap  mt-4 ">
      <Logo className="text-[#0a66c2] ml-38"/>
      <section
        id="nav-container"
        className="flex gap-8 text-xl text-[#757575]  items-center ml-auto"
      >
        <a href="">
          <BsFillRocketTakeoffFill />
          <p>Top Content</p>
        </a>
        <a href="">
          <MdPeopleAlt />
          <p>People</p>
        </a>
        <a href="">
          <BsCollectionPlayFill />
          <p>Learning</p>
        </a>
        <a href="">
          <IoIosBriefcase />
          <p>Jobs</p>
        </a>
        <a href="">
          <BsFillPuzzleFill />
          <p>Games</p>
        </a>
        <a
          id="get-the-app"
          className="border-l-1 border-r-1 border-gray-200 px-4"
          href=""
        >
          <FaLaptop />
          <p>Get the app</p>
        </a>
      </section>
      <div className="flex gap-2 ml-6 mr-[9.5rem]">
        <a
          href="/register"
          className=" hover:bg-gray-100 rounded-full py-3 px-6 text-[1rem] text-gray-600 font-bold"
        >
          join now
        </a>
        <a
          id="sign-b"
          className=" hover:bg-[#effdfd] border py-3 rounded-full px-6 text-[1rem] text-[#0a66c2] hover:text-[#39597a] font-bold"
          href="/login"
        >
          Sign in
        </a>
      </div>
    </nav>
  );
}
