import { useDispatch, useSelector } from "react-redux";
import { RootState, setShowPassword } from "@/app/redux/store";

interface inputProps {
  label?: string;
  type?: string;
  id: string;
  name: string;
  register: any;
  error?: string;
}

export default function InputField({
  label,
  type,
  id,
  name,
  register,
  error,
}: inputProps) {
  const dispatch = useDispatch();
  const { showPassword } = useSelector((state: RootState) => state.app);

  return (
    <main>
      <div className="relative">
        <input
          {...register(name)}
          id={id}
          type={type}
          placeholder=" "
          className={`peer h-[1.8rem] border ${
            error ? "border-red-500" : "border-gray-600"
          } mt-6 rounded-md px-4 pt-11 pb-3 w-full focus:outline-[#0a66c2] `}
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
              dispatch(setShowPassword(!showPassword));
            }}
            id="show-bt"
            className="absolute right-2 top-10 text-[#0a66c2] cursor-pointer hover:bg-[#daedff] rounded-full px-2  h-[1.6rem] focus:border-2 focus:border-[#0a66c2]"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-600 text-[14px] text-left mt-2">{error}</p>
      )}
    </main>
  );
}
