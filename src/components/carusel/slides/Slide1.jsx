import Image from "next/image";
import firstSlideImg from "../../../../public/slides/firstSlideImg.png"
import { SlideBtn } from "./SlideBtn";
import { Button } from "@/components/reusableComponents/Button";

export const Slide1 = () => {
  return (
    <div className="px-5 py-8 my-8 flex flex-col items-center justify-center pointer-events-none">
      <div className="flex items-center justify-center bg-pinkGradient w-[335px] h-[335px] rounded-3xl align-middle">
        <Image
          src={firstSlideImg}
          alt="first slide"
          width={278}
          height={149}
          priority
        />
      </div>
      <div>
        <div className="my-8">
          <h2 className="text-h leading-[1.1] font-semibold text-wightColor max-w-[335px] text-center">
            <span className="text-blueColor">Instant Auto Sales: </span>Boost
            conversion
          </h2>
          <p className="mt-6 text-p leading-[1.2] font-normal text-wightColor max-w-[335px] text-center">
            Immediately deliver digital products and services to your users.
          </p>
        </div>
        <Button
          nameButton="Open API Docs"
          bgColor="bg-blueColor"
          textColor="text-wightColor"
          width="w-full"
          border="border-0"
          hoverBg="hover:bg-hoverColor"
          hoverText="hover:text-wightColor"
        />
        <SlideBtn />
      </div>
    </div>
  );
};
