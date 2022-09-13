import React from "react";
import useSpeakerSortAndFilter from "../../hooks/useSpeakerSortAndFilter";
import SpeakerDetail from "./SpeakerDetail";

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
