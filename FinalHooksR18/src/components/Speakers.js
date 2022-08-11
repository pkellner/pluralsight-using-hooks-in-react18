import React, { useContext, useMemo, useState } from "react";

import { Header } from "./Header";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "../App";
import useSpeakersData from "../hooks/useSpeakersData";

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const context = useContext(ConfigContext);

  const { data, updateSpeaker, loadingStatus } = useSpeakersData(
    "/api/speakers/"
  );
  const isLoading = loadingStatus === "loading";
  const speakerList = data ?? [];
  const hasErrored = loadingStatus === "errored";

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };
  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };
  
  const heartFavoriteHandler = (e, speakerRec) => {
    e.preventDefault();
    const newSpeakerRec = { ...speakerRec, favorite: !speakerRec.favorite };
    updateSpeaker(newSpeakerRec);
  };

  const newSpeakerList = useMemo(
    () =>
      speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        }),
    [speakingSaturday, speakingSunday, speakerList] // speakerList needed for heartFavoriteToggle
  );

  const speakerListFiltered = isLoading ? [] : newSpeakerList;

  if (hasErrored === true) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map((speakerRec) => {
              return (
                <SpeakerDetail
                  key={speakerRec.id}
                  speakerRec={speakerRec}
                  onHeartFavoriteHandler={heartFavoriteHandler}
                  speakingSaturday={speakingSaturday}
                  speakingSunday={speakingSunday}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
