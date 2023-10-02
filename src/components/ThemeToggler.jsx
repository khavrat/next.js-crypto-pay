import { useState, useEffect } from "react";

export const ThemeToggler = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage?.theme || "light"
  );

  const changeTheme = () => {
    if (!("theme" in localStorage)) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html")?.setAttribute("data-theme", "dark");
      setCurrentTheme("dark");
    } else {
      const currentTheme = localStorage.getItem("theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);
      document.querySelector("html")?.setAttribute("data-theme", newTheme);
      setCurrentTheme(localStorage?.theme);
    }
  };

  return (
    <div className="relative inline-block cursor-pointer" onClick={changeTheme}>
      <span
        className={`absolute top-0 left-0 w-6 h-6 bg-blueColor  shadow-dropShadow rounded-full transform  transition-transform ${
          currentTheme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
      <button
        className="inline-block bg-hoverColor shadow-innerShadow rounded-3xl w-11 h-6"
        type="button"
      ></button>
    </div>
  );
};
