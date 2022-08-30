import Header from "./Header";
import AppMenu from "./AppMenu";
import { AppRouterContext } from "../../contexts/AppRouterContext";
import { useContext } from "react";
import { ThemeProvider } from "../../contexts/ThemeContext";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout() {
  const { activeComponent } = useContext(AppRouterContext);

  return (
    <ThemeProvider>
      <Header />
      <AppMenu />
      {activeComponent}
    </ThemeProvider>
  );
}
