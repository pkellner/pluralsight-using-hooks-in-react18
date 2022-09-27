import Header from "./Header";
import AppMenu from "./AppMenu";
import {ThemeProvider} from "../contexts/ThemeContext";
import {useContext} from "react";
import {AppRouterContext} from "../contexts/AppRouterContext";

export default function Layout({ url }) {
  const { activeComponent } = useContext(AppRouterContext);
  return (
    <ThemeProvider>
      <Header />
      <AppMenu />
      {activeComponent}
    </ThemeProvider>
  );
}
