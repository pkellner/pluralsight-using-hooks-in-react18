import React, { useContext } from "react";
import SpeakerDetail from "./SpeakerDetail";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../hooks/useSpeakerSortAndFilter";

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  if (loadingStatus === "loading") {
    return <div className="card">Loading...</div>;
  }
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
