import { changeTheme } from "../utils/changeTheme";

export const ThemeToggler = () => {

  return (
    <div>
      <button
        className="bg-blueColor shadow shadow-[inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)]
  rounded-3xl"
        type="button"
        onClick={changeTheme}
      >toggler</button>
    </div>
  );
};
