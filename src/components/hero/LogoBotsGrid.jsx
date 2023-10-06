import Image from "next/image";
// import logoBots from "../../data/logoBots";
import duck from "../../../public/logoBots/duck.svg";
import alien from "../../../public/logoBots/alien.svg";
import star from "../../../public/logoBots/star.svg";
import slime from "../../../public/logoBots/slime.svg";
import vinu from "../../../public/logoBots/vinu.svg";

const logoBots = [duck , alien, star ,  slime , vinu ];

export const LogoBotsGrid = () => {
  console.log("logoBots :>> ", logoBots);
  return (
    <div className="flex justify-center items-center">
      {logoBots.map((logoBot, index) => (
        <div
          key={index}
          className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-125"
        >
          <Image src={logoBot.src} alt={`bot's logo`} width={63} height={63} className="w-[63px]"/>
        </div>
      ))}
    </div>
  );
};
