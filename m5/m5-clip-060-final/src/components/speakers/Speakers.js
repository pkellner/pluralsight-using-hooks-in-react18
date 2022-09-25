import React, { useContext } from "react";
import { speakerList } from "../../../speakersData";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";

function Speakers() {
  const { darkTheme } = useContext(ThemeContext);
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);

  if (loadingStatus === "hasErrored") return <div>Errored on load</div>;
  if (loadingStatus === "loading") return <div>Loading...</div>;

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

export default Speakers;
