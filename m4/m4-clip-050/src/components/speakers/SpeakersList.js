import React from "react";
import SpeakerDetail from "./SpeakerDetail";

export default function SpeakersList({ speakerList }) {
  return (
    <>
      {speakerList.map(function (speakerRec) {
        return (
          <SpeakerDetail
            key={speakerRec.id}
            speakerRec={speakerRec}
            showDetails={false}
          />
        );
      })}
    </>
  );
}
