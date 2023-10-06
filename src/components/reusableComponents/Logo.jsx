import Image from "next/image";
import logo from "../../../public/logo.svg";

export const Logo = () => {

  return (
    <Image
      src={logo}
      alt="logo"
      className="w-[46px] lg:w-[64px] h-[46px] lg:h-[64px]"
    />
  );
};
