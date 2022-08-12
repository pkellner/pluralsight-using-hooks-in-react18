import React, { useContext, useState } from "react";

import { Header } from "./Header";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "../App";
import { SpeakerModalProvider } from "../contexts/SpeakerModalContext";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [updating, setUpdating] = useState(false);

  const context = useContext(ConfigContext);

  const {
    data,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus,
  } = useContext(SpeakersDataContext);
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
    setUpdating(true);
    updateSpeaker(newSpeakerRec, () => {
      setUpdating(false);
    });
  };

  const newSpeakerList = speakerList
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
    });

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
          <button
            onClick={(e) => {
              let firstName = prompt(
                "Please enter first name of speaker",
                "Harry"
              );

              // NEED TO CHANGE IMAGE URL RENDERING TO RENDERING FROM A STRING URL
              // AND NOT CONCAT SPEAKER ID. ALSO ADD IMAGE PROCESSING (MAYBE HTML5)
              // TO MAKE BLACK AND WHITE OR COLOR INSTEAD OF FUNKY TERNARY EXPRESSION
              // IN IMAGE CONTROL
              setUpdating(true);
              createSpeaker(
                {
                  id: "0",
                  firstName: firstName,
                  lastName: "SpeakerInserted",
                  sat: true,
                  sun: true,
                  favorite: false,
                  company: "Code Camp",
                  twitterHandle: "unknown",
                  userBioShort: "Dummy Bio",
                },
                () => {
                  setUpdating(false);
                }
              );
            }}
          >
            Add New Speaker <i className="fa fa-plus"></i>
          </button>
          {updating ? (
            <div>
              &nbsp;&nbsp;&nbsp;<i className="fas fa-sync fa-spin"></i>
            </div>
          ) : (
            <div>SAME SPACE AS UPDATING ICON</div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            <SpeakerModalProvider>
              {speakerListFiltered.map((speakerRec) => {
                return (
                  <SpeakerDetail
                    key={speakerRec.id}
                    speakerRec={speakerRec}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    speakingSaturday={speakingSaturday}
                    speakingSunday={speakingSunday}
                    setUpdating={setUpdating}
                  />
                );
              })}
            </SpeakerModalProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;

// // just used to convert base data
// var x = speakerListFiltered.map(function (rec) {
//   return {
//     ...rec,
//     imageUrl: `/images/Speaker-${rec.id}.jpg`,
//     email: rec.firstName + "." + rec.lastName + "@codecamp.net",
//   };
// });
// console.log(x);
