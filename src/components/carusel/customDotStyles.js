export const customDotStyles = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    return "flex flex-row gap-[12px] ";
  } else {
    return "flex flex-col gap-[12px] ";
  }
};
