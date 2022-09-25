import React from "react";
import SpeakerDetail from "./SpeakerDetail";
import useSpeakerSortAndFilter from "../hooks/useSpeakerSortAndFilter";

export default function SpeakersList({ speakerList }) {
  
  const speakerListFiltered = useSpeakerSortAndFilter(speakerList);
  
  return (
    <>
      {speakerListFiltered.map(function (speakerRec) {
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
