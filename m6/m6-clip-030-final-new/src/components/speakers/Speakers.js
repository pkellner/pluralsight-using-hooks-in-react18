import React, { useContext } from "react";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakersDataProvider } from "../contexts/SpeakersDataContext";
import { SpeakerMenuProvider } from "../contexts/SpeakerMenuContext";

function Speakers() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenuProvider>
        <SpeakerMenu />
        <div className="container">
          <div className="row g-4">
            <SpeakersDataProvider>
              <SpeakersList />
            </SpeakersDataProvider>
          </div>
        </div>
      </SpeakerMenuProvider>
    </div>
  );
}

export default Speakers;
