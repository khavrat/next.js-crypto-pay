import Image from "next/image";
import thirdSlideImg from "../../../images/slides/thirdSlideImg.png";
import { SlideBtn } from "./SlideBtn";

export const Slide3 = () => {
  return (
    <div className="px-5 py-8 my-8 flex flex-col items-center justify-center pointer-events-none">
      <div className="flex items-center justify-center bg-blueGradient w-[335px] h-[335px] rounded-3xl align-middle">
        <Image
          src={thirdSlideImg}
          alt="third slide"
          width={278}
          height={149}
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-[335px]">
        <div className="my-8">
          <h2 className="text-h leading-[1.1] font-semibold text-wightColor text-center">
            <span className="text-blueColor">Endless customization</span>
            <br />
            with Webhooks
          </h2>
          <p className="mt-6 text-p leading-[1.2] font-normal text-wightColor text-center">
            Receive successful payment notifications in real-time. Integrate to
            any scenario of your service.
          </p>
        </div>
        <SlideBtn />
      </div>
    </div>
  );
};
