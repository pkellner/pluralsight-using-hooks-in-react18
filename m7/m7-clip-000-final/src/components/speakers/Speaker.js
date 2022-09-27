import SpeakerDetail from "./SpeakerDetail";
import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {SpeakersDataContext} from "../contexts/SpeakersDataContext";

export default function Speaker({ id }) {
  const { darkTheme } = useContext(ThemeContext);
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);

  if (loadingStatus === "hasErrored") return <div>Errored on load</div>;
  if (loadingStatus === "loading") return <div>Loading...</div>;

  const speakerRec = speakerList?.find((rec) => rec.id === id);

  return speakerRec ? (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}
