import Header from "./Header";
import { SpeakerMenuProvider } from "../../contexts/SpeakerMenuContext";
import AppMenu from "./AppMenu";
import { AppRouterContext } from "../../contexts/AppRouterContext";
import { useContext } from "react";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout() {
  const { activeComponent } = useContext(AppRouterContext);
  return (
    <div>
      <Header />
      <AppMenu />
      {activeComponent}
    </div>
  );
}
