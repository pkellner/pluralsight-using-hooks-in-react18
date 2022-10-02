import React from "react";

import SpeakerDetail from "./SpeakerDetail";
import SpeakerMenu from "./SpeakerMenu";
import { speakerList } from "../../../speakersData";

const Speakers = () => {
  return (
    <>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          {speakerList.map((speakerRec) => {
            return (
              <SpeakerDetail
                key={speakerRec.id}
                speakerRec={speakerRec}
                showDetails={false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Speakers;
