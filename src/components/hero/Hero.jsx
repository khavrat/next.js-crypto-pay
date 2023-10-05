import { HeroImaging } from "./HeroImaging";
import { ThemeToggler } from "../ThemeToggler";

export const Hero = () => {
  return (
    <section className="container pt-[145px]">
      <ThemeToggler />
      <p className="bg-white text-typography">
        Crypto payments for <span>telegram bots</span>
      </p>
      <HeroImaging />
    </section>
  );
};
