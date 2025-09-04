import { data } from "../data/loginbtData";

type props = {
  className?: string;
  apple?: boolean;
};

export default function LoginOptions({ className, apple }: props) {
  return (
    <main className="flex flex-col gap-5 ">
      {data
        .filter((itm) =>
          apple
            ? itm.name.includes("Apple") || itm.name.includes("Google")
            : !itm.name.includes("Apple")
        )
        .map((item, index) => {
          return (
            <a
              key={index}
              href=""
              className={`flex-center login-button ${
                item.name.endsWith("Google")
                  ? className
                  : "text-[#6B6B6B] hover:bg-[#F1F1F1]"
              }`}
            >
              <span
                className={`${
                  item.name.endsWith("Google") &&
                  "text-[1.3rem] rounded-full px-[0.5rem] py-[0.5rem] bg-[#ffff]"
                }`}
              >
                {item.logo}
              </span>
              <p>{item.name}</p>
            </a>
          );
        })}
    </main>
  );
}
