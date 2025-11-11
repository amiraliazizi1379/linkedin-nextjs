import { RootState, setLargImg } from "@/redux/store";
import { CloseButton } from "../../components/closeButton";
import { useDispatch, useSelector } from "react-redux";

export function LargPreviewImg() {
  const dispatch = useDispatch();
  const { fullScreenImgSrc } = useSelector((state: RootState) => state.app);

  return (
    <div className="flex-center fixed">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => dispatch(setLargImg(false))}
      ></div>
      <section className="fixed top-[1rem] flex flex-col items-end max-w-[70vw] h-[95vh] rounded-lg p-4   bg-[#fff]">
        <CloseButton setCustomState={setLargImg} />
        <img src={fullScreenImgSrc} alt="" className="rounded-md h-[82vh]" />
      </section>
    </div>
  );
}
