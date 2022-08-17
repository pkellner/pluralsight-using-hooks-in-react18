import SpeakerDetail from "./SpeakerDetail";
import React, { useContext } from "react";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import { SpeakerModalProvider } from "../../contexts/SpeakerModalContext";

export default function Speaker({ id }) {
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);
  
  if (loadingStatus === "loading") return null;

  return speakerRec ? (
    <SpeakerModalProvider>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </SpeakerModalProvider>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}
