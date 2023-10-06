import { ThemeToggler } from "../ThemeToggler";
import { Button } from "../reusableComponents/Button";
import { LogoBotsGrid } from "../hero/LogoBotsGrid";
import { HeroImaging } from "./HeroImaging";

export const Hero = () => {
  return (
    <section className="container pt-[145px]">
      <ThemeToggler />
      <p className="max-w-[335px] md:max-w-[692px] text-center text-textColor text-hh md:text-m heading-[1.1] font-semibold tracking-[-1.38px] md:tracking-[-2.4px]">
        Crypto payments for
        <span className="text-blueColor"> telegram bots</span>
      </p>
      <p className="text-p lg:text-pp text-textColor font-normal heading-[1.2]">
        Seamlessly accept crypto payments in your Telegram bots and services.
      </p>
      <Button
        nameButton="Get started"
        fontSize="text-p lg:text-pp"
        padding="py-[12px] px-[32px] lg:py-[18px] lg:px-[42px]"
        bgColor="bg-blueColor"
        textColor="text-wightColor"
        border="border-0"
        hoverBg="hover:bg-hoverColor"
        hoverText="hover:text-wightColor"
      ></Button>
      <LogoBotsGrid/>
      <HeroImaging />
    </section>
  );
};
