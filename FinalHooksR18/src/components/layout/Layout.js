import { useContext } from "react";
import Header from "./Header";
import AppMenu from "./AppMenu";
import { AppRouterContext } from "../../contexts/AppRouterContext";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { SpeakerMenuProvider } from "../../contexts/SpeakerMenuContext";
import { SpeakersDataProvider } from "../../contexts/SpeakersDataContext";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout() {
  const { activeComponent } = useContext(AppRouterContext);

  return (
    <ThemeProvider>
      <Header />
      <SpeakersDataProvider>
        <SpeakerMenuProvider>
          <AppMenu />
          {activeComponent}
        </SpeakerMenuProvider>
      </SpeakersDataProvider>
    </ThemeProvider>
  );
}
