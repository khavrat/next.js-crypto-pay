import Image from "next/image";
import secondSlideImg from "../../../images/slides/secondSlideImg.png"
import { SlideBtn } from "./SlideBtn";

export const Slide2 = () => {
  return (
    <div className="px-5 py-8 my-8 flex flex-col items-center justify-center pointer-events-none">
      <div className="flex items-center justify-center bg-yellowGradient w-[335px] h-[335px] rounded-3xl align-middle">
        <Image
          src={secondSlideImg}
          alt="second slide"
          width={278}
          height={149}
          priority
        />
      </div>
      <div>
        <div className="my-8">
          <h2 className="text-h leading-[1.1] font-semibold text-wightColor max-w-[335px] text-center">
            <span className="text-blueColor">Channels integration: </span>
            Seamless access
          </h2>
          <p className="mt-6 text-p leading-[1.2] font-normal text-wightColor max-w-[335px] text-center">
            Automatically unlock exclusive content to your users.
          </p>
        </div>
        <SlideBtn />
      </div>
    </div>
  );
};
