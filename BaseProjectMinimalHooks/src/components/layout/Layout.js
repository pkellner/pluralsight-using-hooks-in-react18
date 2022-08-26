import Header from "./Header";
import AppMenu from "./AppMenu";
import About from "../about/About";
import Speakers from "../speakers/Speakers";
import SpeakerDetail from "../speakers/SpeakerDetail";

export default function Layout({ url }) {
  const speakerRec = {
    id: 41808,
    firstName: "Paul",
    lastName: "Everitt",
    sat: true,
    sun: true,
    favorite: false,
    bio:
      "Paul is the PyCharm and WebStorm Developer Advocate at JetBrains. Before that, Paul was a partner at Agendaless Consulting and co-founder of Zope Corporation, taking the first open source application server through $14M of funding.",
    company: "JetBrains, Inc.",
    twitterHandle: "paulweveritt",
    userBioShort:
      "Paul is the PyCharm and WebStorm Developer Advocate at JetBrains.",
    imageUrl: "/images/Speaker-41808.jpg",
    email: "Paul.Everitt@codecamp.net",
  };

  return (
    <div>
      <Header />
      <AppMenu />
      {url === "/about" && <About />}
      {url === "/" && <Speakers />}
      {url.startsWith("/speaker/") && (
        <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
      )}
    </div>
  );
}
