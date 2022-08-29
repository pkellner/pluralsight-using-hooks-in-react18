import Header from "./Header";
import AppMenu from "./AppMenu";
import { AppRouterContext } from "../../contexts/AppRouterContext";
import { useContext, useState } from "react";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout() {
  const { activeComponent } = useContext(AppRouterContext);
  const [darkTheme, setDarkTheme] = useState(false);
  
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  
  return (
    <div>
      <Header />
      <AppMenu toggleTheme={toggleTheme} />
      {/*{activeComponent}*/}
      <div className={darkTheme ? "theme-dark" : "theme-light"}>
        {activeComponent}
      </div>
    </div>
  );
}
