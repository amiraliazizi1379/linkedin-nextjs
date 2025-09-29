import { BeatLoader } from "react-spinners";

type propType = {
  name: string;
  className?: string;
  loading: boolean;
};

export default function SubmitButton({ name, className , loading }: propType) {
  return (
    <button
      type="submit"
      className={`${className} bg-[#0a66c2] hover:bg-[#06417c] w-full  rounded-full  text-white cursor-pointer`}
    >
      {loading ? <BeatLoader color="white" size={10} /> : name}
    </button>
  );
}
