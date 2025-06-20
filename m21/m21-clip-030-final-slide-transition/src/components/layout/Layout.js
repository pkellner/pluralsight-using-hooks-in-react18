import Header from "./Header";
import AppMenu from "./AppMenu";
import Speakers from "../speakers/Speakers";
import About from "../about/About";
import Speaker from "../speakers/Speaker";
import SpeakerList from "../speakers/SpeakerList";
import { ThemeProvider } from "../contexts/ThemeContext";
import TopSpeakers from "../topSpeakers/TopSpeakers";
import SimpleNameForm1 from "../misc/SimpleNameForm/SimpleNameForm1";
import SimpleNameForm2 from "../misc/SimpleNameForm/SimpleNameForm2";
import SimpleNameForm3 from "../misc/SimpleNameForm/SimpleNameForm3";
import SimpleNameForm4 from "../misc/SimpleNameForm/SimpleNameForm4";
import SimpleNameForm5 from "../misc/SimpleNameForm/SimpleNameForm5";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout({ url }) {
  const speakerId = parseInt(url.substring(9).replace("#", ""));

  return (
    <ThemeProvider>
      <Header />
      <AppMenu />
      {url === "/about" && <About />}
      {url === "/" && <Speakers />}
      {url.startsWith("/speaker/") && <Speaker id={speakerId} />}
      {url.startsWith("/speakerlist") && <SpeakerList />}
      {url.startsWith("/topspeakers") && <TopSpeakers />}
      {url.startsWith("/simplenameform1") && <SimpleNameForm1 />}
      {url.startsWith("/simplenameform2") && <SimpleNameForm2 />}
      {url.startsWith("/simplenameform3") && <SimpleNameForm3 />}
      {url.startsWith("/simplenameform4") && <SimpleNameForm4 />}
      {url.startsWith("/simplenameform5") && <SimpleNameForm5 />}
    </ThemeProvider>
  );
}
