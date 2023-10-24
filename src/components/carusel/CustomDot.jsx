import { useState, useEffect } from "react";

export const CustomDot = ({ active, index, onClick }) => {
  const [isActive, setIsActive] = useState(active);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleDotClick = () => {
    onClick();
    setIsActive(true);
  };

  return (
    <li data-index={index}>
      <button
        aria-label={`go to slide ${index + 1}`}
        className={`transition-all rounded-[90px] p-0 mb-8 ${
          screenWidth < 768 ? "w-[82px] h-[4px] " : "w-[4px] h-[82px]"
        } ${isActive ? "bg-blueColor" : "bg-disabledColor"}`}
        onClick={handleDotClick}
      ></button>
    </li>
  );
};
