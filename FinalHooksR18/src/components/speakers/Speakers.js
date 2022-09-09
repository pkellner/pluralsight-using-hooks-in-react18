import React, { useContext } from "react";
import SpeakerDetail from "./SpeakerDetail";
import { SpeakerModalProvider } from "../../contexts/SpeakerModalContext";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../../hooks/useSpeakerSortAndFilter";
import SpeakerMenu from "./SpeakerMenu";
import { ThemeContext } from "../../contexts/ThemeContext";

const Speakers = () => {
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const { darkTheme } = useContext(ThemeContext);

  const speakerListFiltered = useSpeakerSortAndFilter(speakerList);
  if (loadingStatus === "hasErrored") return <div>Errored on load</div>;

  if (loadingStatus === "loading") return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakerModalProvider>
            {speakerListFiltered.map((speakerRec) => {
              return (
                <SpeakerDetail
                  key={speakerRec.id}
                  speakerRec={speakerRec}
                  showDetails={false}
                />
              );
            })}
          </SpeakerModalProvider>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
