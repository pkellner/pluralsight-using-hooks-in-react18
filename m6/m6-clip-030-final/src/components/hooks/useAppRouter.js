import React, {useState} from "react";

import Speaker from "../speakers/Speaker";
import About from "../about/About";
import Speakers from "../speakers/Speakers";
import SpeakerList from "../speakers/SpeakerList";
import {SpeakersDataProvider} from "../contexts/SpeakersDataContext";

export default function useAppRouter(url) {
  const [routeUrl, setRouteUrl] = useState(url);

  function setRoute(url) {
    history.replaceState({}, url.substring(2), url); // makes URL change when menu selected
    setRouteUrl(url);
  }

  let activeComponent;
  if (routeUrl.startsWith("/speakerlist")) {
    activeComponent = (
      <SpeakersDataProvider>
        <SpeakerList />
      </SpeakersDataProvider>
    );
  } else if (routeUrl.startsWith("/speaker")) {
    activeComponent = (
      <Speaker id={parseInt(routeUrl.substring(9).replace("#", ""))} />
    );
  } else if (routeUrl === "/about") {
    activeComponent = <About />;
  } else {
    activeComponent = (
      <SpeakersDataProvider>
        <Speakers />
      </SpeakersDataProvider>
    );
  }

  return { activeComponent, setRoute };
}
