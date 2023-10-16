import Image from "next/image";
import firstSlideImg from "../../../../public/slides/firstSlideImg.png"
import { SlideBtn } from "./SlideBtn";

export const Slide1 = () => {
  return (
    <div className=" px-5 py-8 my-8 flex flex-col md:flex-row md:gap-[40px] prelg:gap-[122px] items-center justify-center pointer-events-none">
      <div className=" flex items-center justify-center bg-pinkGradient w-[335px] md:w-[488px]  h-[335px] md:h-[488px] rounded-3xl align-middle">
        <Image
          src={firstSlideImg}
          alt="first slide"
          width={278}
          height={149}
          className="md:w-[405px] md:h-[216px]"
          priority
        />
      </div>
      <div>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-h leading-[1.1] font-semibold text-wightColor max-w-[335px] ">
            <span className="text-blueColor">Instant Auto Sales: </span>Boost
            conversion
          </h2>
          <p className="mt-6 text-p leading-[1.2] font-normal text-wightColor max-w-[335px] ">
            Immediately deliver digital products and services to your users.
          </p>
        </div>
        <SlideBtn />
      </div>
    </div>
  );
};
