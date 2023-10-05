export const Button = ({
  nameButton = "",
  fontSize = "text-p",
  bgColor = "bg-bgButton",
  textColor = "text-textButton",
  border = "border",
  borderColor = "border-borderButton",
  borderRadius = "rounded-full",
  padding = "px-[32px] py-[12px]",
  hoverStyles = "hover:bg-hoverButton hover:text-textButton hover:border-hoverBorderBtn",
  fontFamily = "font-sans",
  fontWeight = "font-medium",
  width="w-0",
  ...props
}) => {
  const buttonClasses = `${fontSize} ${bgColor} ${textColor} ${border} ${borderColor} ${borderRadius} ${padding} ${hoverStyles} ${fontFamily}`;

  return (
    <button className={buttonClasses} {...props}>
      {nameButton}
    </button>
  );
};
