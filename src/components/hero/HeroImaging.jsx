import Image from "next/image";
import heroImaging from '../../images/heroImaging.png'

export const HeroImaging = () => {
  return (
      <Image
        src={heroImaging}
        alt="presentation illustration"
        className="dark:invert"
        width={328.211}
        height={688.598}
        priority
      />
  );
};
