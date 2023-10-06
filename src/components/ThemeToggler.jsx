import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggler = () => {
  // const [currentTheme, setCurrentTheme] = useState(
  //   localStorage?.theme || "light"
  // );
  const {currentTheme, setCurrentTheme}=useTheme()

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
    <div className="fixed top-[100px] lg:top-[120px] inline-block cursor-pointer" onClick={changeTheme}>
      <span
        className={`absolute top-0 left-0 w-6 h-6 bg-wightColor  shadow-dropShadow rounded-full transform  transition-transform ${
          currentTheme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
      <button
        className="inline-block bg-blueColor shadow-innerShadow rounded-3xl w-11 h-6"
        type="button"
      ></button>
    </div>
  );
};
