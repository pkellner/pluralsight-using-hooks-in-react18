import SpeakerDetail from "./SpeakerDetail";
import React, { useContext } from "react";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Speaker({ id }) {
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const { darkTheme } = useContext(ThemeContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  if (loadingStatus === "loading") return null;

  return speakerRec ? (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}
