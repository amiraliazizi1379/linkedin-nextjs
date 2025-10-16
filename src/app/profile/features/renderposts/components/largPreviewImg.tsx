import { RootState, setLargImg } from "@/app/redux/store";
import { CloseButton } from "../../components/closeButton";
import { useDispatch, useSelector } from "react-redux";

export function LargPreviewImg() {
  const dispatch = useDispatch();
  const { fullScreenImgSrc } = useSelector((state: RootState) => state.app);

  return (
    <div className="flex-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => dispatch(setLargImg(false))}
      ></div>
      <section className="fixed top-[3rem] flex flex-col items-end max-w-[70vw] h-[90vh] rounded-lg p-4 overflow-auto  bg-[#fff]">
        <CloseButton setCustomState={setLargImg} />
        <img src={fullScreenImgSrc} alt="" className="rounded-md" />
      </section>
    </div>
  );
}
