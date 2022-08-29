import React, { useState } from "react";
import Speakers from "../components/speakers/Speakers";
import Speaker from "../components/speakers/Speaker";
import About from "../components/about/About";
import SpeakerListHolder from "../components/speakers/SpeakerListHolder";
import SpeakerList from "../components/speakers/SpeakerList";

export default function useAppRouter(url) {
  const [routeUrl, setRouteUrl] = useState(url);

  function setRoute(url) {
    history.replaceState({}, url.substring(2), url);
    setRouteUrl(url);
  }

  let activeComponent = <Speakers />;
  if (routeUrl.startsWith("/speakerlist")) {
    activeComponent = <SpeakerListHolder />;
  } else if (routeUrl.startsWith("/speaker")) {
    activeComponent = (
      <Speaker id={parseInt(routeUrl.substring(9).replace("#", ""))} />
    );
  } else if (routeUrl === "/about") {
    activeComponent = <About />;
  }

  return { activeComponent, setRoute };
}
