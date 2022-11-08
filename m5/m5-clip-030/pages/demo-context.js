import { createContext, useState } from "react";
import DemoUseContext from "../src/components/misc/demo-usecontext";

export const ThemeContext = createContext();

function Ch2() {
  return <DemoUseContext />;
}

export default function DemoContext() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Ch2>
        <DemoUseContext />
      </Ch2>
    </ThemeContext.Provider>
  );
}
