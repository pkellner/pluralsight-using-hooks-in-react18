import { createContext, useState } from "react";
import DemoUseContext from "../src/components/misc/demo-usecontext";

export const ThemeContext = createContext({});

export default function DemoContext() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{theme,  setTheme}}>
       <DemoUseContext />
    </ThemeContext.Provider>
  );
}
