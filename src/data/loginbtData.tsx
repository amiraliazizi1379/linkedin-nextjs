import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

export const data = [
  {
    name: "Continue with Google",
    logo: <FcGoogle />,
  },
  {
    name: "Continue with Microsoft",
    logo: <Image alt="" src="../../public/microsoft.png" className="w-[1.3rem]" />,
  },
  {
    name: "Sign in with Apple",
    logo: <FaApple className="text-[1.5rem] text-[#171717]" />,
  },
];
