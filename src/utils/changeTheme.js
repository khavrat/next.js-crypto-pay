export const changeTheme = () => {
  if (!("theme" in localStorage)) {
    localStorage.setItem("theme", "dark");
    document.querySelector("html")?.setAttribute("data-theme", "dark");
  } else {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  }
};

export const isThemeDark = () => {
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
