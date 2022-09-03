import Header from "./Header";
import AppMenu from "./AppMenu";
import SpeakerDetail from "../speakers/SpeakerDetail";
import SpeakerModal from "../speakerModal/SpeakerModal";
import Speakers from "../speakers/Speakers";
import About from "../about/About";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout({url}) {
  return (
    <>
      <Header />
      <AppMenu />
      {url === "/about" && <About />}
      {url === "/" && <Speakers />}
      {url.startsWith("/speaker/") && (
        <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
      )}
      {url.startsWith("/speakerpopup") && <SpeakerModal modalShow={true} />}
    </>
  );
}
