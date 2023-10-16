import { ThemeToggler } from "../ThemeToggler";
import { Button } from "../reusableComponents/Button";
import { LogoBotsGrid } from "../hero/LogoBotsGrid";
import { HeroImaging } from "./HeroImaging";

export const Hero = () => {
  return (
    <section className=" pt-[148px] pb-[80px] lg:pb-[120px]">
      <div className="container">
        <ThemeToggler />
        <div className="flex justify-between max-md:flex-col ">
          <div className="max-md:text-center md:py-[80px] z-[-3]">
            <h1 className="max-w-[335px] md:max-w-[400px] prelg:max-w-[692px]  text-textColor text-hh prelg:text-m heading-[1.1] font-semibold tracking-[-1.38px] md:tracking-[-2.4px]">
              Crypto payments for
              <span className="text-blueColor"> telegram bots</span>
            </h1>
            <p className="mt-[24px] md:mt-[32px] mb-[12px] md:mb-[32px] text-p prelg:text-pp text-textColor font-normal heading-[1.2]">
              Seamlessly accept crypto payments
              <br />
              in your Telegram bots and services.
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
            <LogoBotsGrid />
            <p className="mt-[12px] md:mt-[16px] text-p prelg:text-pp text-textColor font-normal loading-[1.2] max-md:text-center">
              Popular bots use Crypto Pay
            </p>
          </div>
          <HeroImaging />
        </div>
      </div>
    </section>
  );
};
