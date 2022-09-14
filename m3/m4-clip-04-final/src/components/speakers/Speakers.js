import React from "react";
import { speakerList } from "../../../speakersData";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";

function Speakers() {
  const darkTheme = false;
  
  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
        <SpeakerMenu />
        <div className="container">
          <div className="row g-4">
            <SpeakersList speakerList={speakerList} />
          </div>
        </div>
     
    </div>
  );
}

export default Speakers
