import Logo from "./logo";
import { data } from "../data/footerData";
export default function Footer() {
  return (
    <footer className="flex-center flex-wrap gap-4 text-gray-500 text-[12px] mt-6 mb-4 max-[1023px]:opacity-0">
      <Logo className="text-lg hover:underline" logoComponent="text-xl" />

      <span>© 2025</span>

      {data.map((item, index) => {
        return (
          <a className="hover:underline" key={index} href={item.href}>
            {item.name}
          </a>
        );
      })}
    </footer>
  );
}
