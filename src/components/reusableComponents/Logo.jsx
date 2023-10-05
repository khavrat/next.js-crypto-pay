import Image from "next/image";
import logoSm from "../../images/logoSm.svg";

export const Logo = () => {

  return (
    <Image
      src={logoSm}
      alt="logo"
      className="w-[46px] lg:w-[64px] h-[46px] lg:h-[64px]"
    />
  );
};
