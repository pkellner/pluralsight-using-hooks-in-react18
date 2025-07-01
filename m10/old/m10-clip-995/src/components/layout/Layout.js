import Header from "./Header";
import AppMenu from "./AppMenu";
import Speakers from "../speakers/Speakers";
import About from "../about/About";
import Speaker from "../speakers/Speaker";
import SpeakerList from "../speakers/SpeakerList";
import { ThemeProvider } from "../contexts/ThemeContext";
import Home from "../home/Home";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout({ url }) {
  const speakerId = parseInt(url.substring(9).replace("#", ""));

  return (
    <ThemeProvider>
      <Header />
      <AppMenu />
      {url === "/" && <Home />}
      {url.startsWith("/about") && <About />}
      {url.startsWith("/speakers") && <Speakers />}
      {url.startsWith("/speaker/") && <Speaker id={speakerId} />}
      {url.startsWith("/speakerlist") && <SpeakerList />}
    </ThemeProvider>
  );
}
