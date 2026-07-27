import { RootState, setLargImg } from "@/redux/store";
import { CloseButton } from "../../components/closeButton";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export function LargPreviewImg() {
  const dispatch = useDispatch();
  const { fullScreenImgSrc } = useSelector((state: RootState) => state.app);

  return (
    <div className="flex-center fixed z-50">
      <div
        className="fixed inset-0 z-50 bg-black opacity-70"
        onClick={() => dispatch(setLargImg(false))}
      ></div>
      <section className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-end min-[900px]:max-w-[70vw] min-[1023px]:h-[95vh] rounded-lg p-4 z-50 bg-[#fff] max-[500px]:w-[230px]">
        <CloseButton setCustomState={setLargImg} />
        <Image
          src={fullScreenImgSrc}
          alt=""
          className=" object-cover rounded-md max-[500px]:w-[200px] max-[500px]:h-[200px] max-[500px]:rounded-full min-[1023px]:h-[82vh]"
        />
      </section>
    </div>
  );
}
