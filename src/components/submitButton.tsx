type propType = {
  name: string;
  className?: string;
};

export default function SubmitButton({ name, className }: propType) {
  return (
    <button
      type="submit"
      className={`${className} bg-[#0a66c2] hover:bg-[#06417c] w-full  rounded-full  text-white cursor-pointer`}
    >
      {name}
    </button>
  );
}
