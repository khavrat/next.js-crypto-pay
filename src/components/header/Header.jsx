import { Logo } from "../reusableComponents/Logo";
import { Navigation } from "../navigation/Navigation";
import { Button } from "../reusableComponents/Button";

export const Header = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 w-full">
      <div className="container bg-bodyColor py-[42px] flex align-middle justify-between z-9">
        <Logo />
        <div className="flex justify-end gap-[100px] lg:gap-[239px]">
          <Navigation />
          <Button
            nameButton="Get started"
            fontSize="text-p lg:text-pp"
            padding="py-[12px] px-[32px] lg:py-[18px] lg:px-[42px]"
          ></Button>
        </div>
      </div>
    </header>
  );
};
