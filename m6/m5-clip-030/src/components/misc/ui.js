import { useContext } from "react";
import { ThemeContext } from "./demoContextDedicated";

export default function UI() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>This is My UI</h1>
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Toggle Theme
      </button>
      <hr />
      {darkTheme ? "dark" : "light"}
    </>
  );
}
