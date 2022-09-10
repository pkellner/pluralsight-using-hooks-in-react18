import React, { useState } from "react";
import Speakers from "../components/speakers/Speakers";
import Speaker from "../components/speakers/Speaker";
import About from "../components/about/About";
import SpeakerList from "../components/speakers/SpeakerList";
import { SpeakerMenuProvider } from "../contexts/SpeakerMenuContext";
import { SpeakersDataProvider } from "../contexts/SpeakersDataContext";

export default function useAppRouter(url) {
  const [routeUrl, setRouteUrl] = useState(url);

  function setRoute(url) {
    //history.replaceState({}, url.substring(2), url);
    setRouteUrl(url);
  }

  let activeComponent = (
    <SpeakersDataProvider>
      <Speakers />
    </SpeakersDataProvider>
  );

  if (routeUrl.startsWith("/speakerlist")) {
    activeComponent = <SpeakerList />;
  } else if (routeUrl.startsWith("/speaker")) {
    activeComponent = (
      <SpeakersDataProvider>
        <Speaker id={parseInt(routeUrl.substring(9).replace("#", ""))} />
      </SpeakersDataProvider>
    );
  } else if (routeUrl === "/about") {
    activeComponent = <About />;
  }

  return { activeComponent, setRoute };
}
