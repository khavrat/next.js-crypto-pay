import Image from "next/image";
import duck from "../../../public/logoBots/duck.svg";
import alien from "../../../public/logoBots/alien.svg";
import star from "../../../public/logoBots/star.svg";
import slime from "../../../public/logoBots/slime.svg";
import vinu from "../../../public/logoBots/vinu.svg";

const logoBots = [duck , alien, star ,  slime , vinu ];

export const LogoBotsGrid = () => {
  return (
    <ul className="mt-[24px] md:mt-[56px] flex max-md:justify-center items-center space-x-[-20px] hover:space-x-[2px] transition-all duration-300 ease-in-out">
      {logoBots.map((logoBot, index) => (
        <li
          key={index}
          className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110 max-w-[251px] lg:max-w-[352px]"
        >
          <Image
            src={logoBot.src}
            alt={`bot's logo`}
            width={63}
            height={63}
            className="w-[63px] lg:w-[96px]"
          />
        </li>
      ))}
    </ul>
  );
};
