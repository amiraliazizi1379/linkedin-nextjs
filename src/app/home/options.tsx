import {ReactNode } from "react";

type props = {
  logo: ReactNode;
  name: string;
};
type MyComponentProps = {
  datas: props[];
   styles? : string;
   items? : string;
};

export default function Options({datas , styles , items}: MyComponentProps) {
  return (
    <section className={`flex-center  gap-8 text-xl ${styles}  max-[449px]:gap-6 max-[449px]:pl-[10rem] max-[1023px]:order-2   overflow-x-auto max-[1023px]:col-start-1 max-[1023px]:col-end-3 max-[1023px]:mt-12 max-[1023px]:gap-[10vw]`}>
      {datas.map((item, index) => {
        return (
          <a
            key={index}
            className={`flex flex-col items-center ${items} gap-[4px] cursor-pointer transition-none hover:text-[#171717] ${
              item.name === "Get the app" &&
              "border-l-1 border-r-1 border-gray-200 px-4"
            }`}
            href=""
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
          </a>
        );
      })}
    </section>
  );
}
