import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import heroImgDark from "../../../public/hero/heroImgDark.png";
import heroImgLight from "../../../public/hero/heroImgLight.png";

export const HeroImaging = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      {currentTheme === "dark" ? (
        <Image
          src={heroImgDark}
          alt="screen"
          quality={100}
          className="w-[302px] md:w-[328px]"
          priority
        />
      ) : (
        <Image
          src={heroImgLight}
          alt="screen"
          quality={100}
          className="w-[302px] md:w-[328px]"
          priority
        />
      )}
    </div>
  );
};
