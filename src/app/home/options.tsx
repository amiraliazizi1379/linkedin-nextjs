"use client";

import { RootState } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";

type props = {
  logo: ReactNode;
  name: string;
};
type MyComponentProps = {
  datas: props[];
  styles?: string;
  Bstyles?: string;
  items?: string;
  noActiveOptions?: boolean;
};

export default function Options({
  datas,
  styles,
  Bstyles,
  items,
  noActiveOptions,
}: MyComponentProps) {
  const [activeOption, setActiveOption] = useState(0);
  const router = useRouter();
  const { userData } = useSelector((state: RootState) => state.app);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.split("/profile/")[1] === "myNetwork") setActiveOption(1);
  }, [pathname]);

  return (
    <section className={`flex-center   text-xl ${styles}  `}>
      {datas.map((item, index) => {
        return (
          <button
            onClick={() => {
              setActiveOption(index);
              if (item.name === "Home") router.push(`/profile/${userData.id}`);
              if (item.name === "My Network") router.push("/profile/myNetwork");
            }}
            key={index}
            className={`${Bstyles} ${
              activeOption === index &&
              !noActiveOptions &&
              "text-[#171717] border-b-2"
            } py-1 px-6.5 flex flex-col items-center ${items} transition-none  cursor-pointer  hover:text-[#171717] ${
              item.name === "Get the app" &&
              "border-l-1 border-r-1 border-gray-200 px-4"
            }`}
          >
            <span>{item.logo}</span>
            <p
              className={`text-[12px] ${
                (item.name === "Top Content" && "w-18") ||
                (item.name === "Get the app" && "w-16")
              }`}
            >
              {item.name}
            </p>
          </button>
        );
      })}
    </section>
  );
}
