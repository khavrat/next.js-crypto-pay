export const Button = ({
  nameButton = "",
  fontSize = "text-p",
  bgColor = "bg-bgButton",
  textColor = "text-textButton",
  border = "border",
  borderColor = "border-borderButton",
  borderRadius = "rounded-full",
  padding = "px-[32px] py-[12px]",
  hoverBg = "hover:bg-hoverButton",
  hoverText = "hover:text-textButton",
  hoverBorder="hover:border-hoverBorderBtn",
  fontFamily = "font-sans",
  fontWeight = "font-medium",
  width="",
  ...props
}) => {
  const buttonClasses = `${fontSize} ${bgColor} ${textColor} ${border} ${borderColor} ${borderRadius} ${padding} ${hoverBg} ${hoverText} ${hoverBorder} ${fontFamily} ${width}`;

  return (
    <button className={buttonClasses} {...props}>
      {nameButton}
    </button>
  );
};
