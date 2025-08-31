import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

type props = {
  // href : string;
  name: string;
  component: ReactNode;
  clasName?: string;
  textwidth?: string;
};

export default function NavLink({
  name,
  component,
  clasName,
  textwidth,
}: props) {
  return (
    <a
      className={`flex flex-col items-center gap-[4px] cursor-pointer transition-none hover:text-[#171717] ${clasName}`}
    >
      <span>{component}</span>
      <p className={`text-[12px] ${textwidth}`}>{name}</p>
    </a>
  );
}
