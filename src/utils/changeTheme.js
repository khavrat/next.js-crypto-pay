export const isUserThemeDark = () => {
  if (
    localStorage.theme === "dark" || 
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.querySelector("html")?.setAttribute("data-theme", "dark");
  } else {
    document.querySelector("html")?.setAttribute("data-theme", "light");
  }
};
