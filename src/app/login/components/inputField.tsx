
import { useUserContext } from "../../../context/useContext";

interface inputProps {
  label?: string;
  type?: string;
  id: string;
}

export default function InputField({ label, type, id }: inputProps) {
 
  const { showPassword, setShowPassword } = useUserContext();
  console.log(showPassword);

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        className="peer h-[1.8rem] border border-gray-600 mt-6 rounded-md px-4 pt-11 pb-3 w-full focus:outline-[#0a66c2] "
      />
      <label
        htmlFor={id}
        className="absolute pointer-events-none
 cursor-text z-10 top-8 text-[13px] left-[1rem] text-gray-500 peer-placeholder-shown:top-10.5 peer-placeholder-shown:text-base peer-focus:text-[13px] peer-focus:top-8"
      >
        {label}
      </label>
      {(type === "password" || type === "text") && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowPassword(!showPassword);
          }}
          id="show-bt"
          className="absolute right-2 top-10 text-[#0a66c2] cursor-pointer hover:bg-[#daedff] rounded-full px-2  h-[1.6rem] focus:border-2 focus:border-[#0a66c2]"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}
