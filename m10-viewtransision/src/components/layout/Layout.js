import Header from "./Header";
import AppMenu from "./AppMenu";
import Speakers from "../speakers/Speakers";
import About from "../about/About";
import Speaker from "../speakers/Speaker";
import SpeakerList from "../speakers/SpeakerList";
import { ThemeProvider } from "../contexts/ThemeContext";
import SpeakerNew from "../../../pages/speakernew";
import Go from "../../../pages/api/videotest/go";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout() {

  return (
    <Go />
  )


  return (
    <SpeakerNew />
  )

  // const speakerId = parseInt(url.substring(9).replace("#", ""));
  //
  // return (
  //   <ThemeProvider>
  //     <Header />
  //     <AppMenu />
  //     {url === "/about" && <About />}
  //     {url === "/" && <Speakers />}
  //     {url.startsWith("/speaker/") && <Speaker id={speakerId} />}
  //     {url.startsWith("/speakerlist") && <SpeakerList />}
  //   </ThemeProvider>
  // );
}
