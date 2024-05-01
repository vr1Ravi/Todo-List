import { useContext, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import AppContext from "../context/context";

const ThemeButton = () => {
  const {
    themes: [theme, setTheme],
  } = useContext(AppContext)!;

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    console.log("in");

    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={handleChangeTheme}
      className=" bg-indigo-500 px-2 rounded-sm"
    >
      {theme === "light" ? (
        <CiDark style={{ fontSize: "1.2rem" }} />
      ) : (
        <CiLight style={{ fontSize: "1.2rem" }} />
      )}
    </button>
  );
};

export default ThemeButton;
