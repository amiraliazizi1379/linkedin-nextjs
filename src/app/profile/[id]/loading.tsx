import Logo from "@/components/logo";
import { BarLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex-center flex-col h-screen">
      <Logo className="text-[#0a66c2] text-4xl" logoComponent="text-4xl" />
      <BarLoader color="#0a66c2"/>
    </div>
  );
}
