import React, { useContext } from "react";
import {
  SpeakersDataContext,
  SpeakersDataProvider,
} from "../../contexts/SpeakersDataContext";
import SpeakerMenu from "./SpeakerMenu";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SpeakerMenuProvider } from "../../contexts/SpeakerMenuContext";
import SpeakersList from "./SpeakersList";



const WithContext = () => {
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const { darkTheme } = useContext(ThemeContext);

  if (loadingStatus === "hasErrored") return <div>Errored on load</div>;
  if (loadingStatus === "loading") return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakerMenuProvider>
            <SpeakersList speakerList={speakerList} />
          </SpeakerMenuProvider>
        </div>
      </div>
    </div>
  );
};

export default function Speakers() {
  return (
    <SpeakersDataProvider>
      <WithContext />
    </SpeakersDataProvider>
  );
}
