import { useContext } from "react";
import { ThemeContext } from "../../../pages/demo-context";

export default function DemoUseContext() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="container">
      <h1>The Theme is: {theme}</h1>
      <hr />
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
