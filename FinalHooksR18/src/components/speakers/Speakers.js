import React, { useContext } from "react";

import SpeakerDetail from "./SpeakerDetail";
import { SpeakerModalProvider } from "../../contexts/SpeakerModalContext";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../../hooks/useSpeakerSortAndFilter";

const Speakers = () => {
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);

  const speakerListFiltered = useSpeakerSortAndFilter(speakerList);
  if (loadingStatus === "hasErrored") return <div>Errored on load</div>;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            <SpeakerModalProvider>
              {speakerListFiltered.map((speakerRec) => {
                return (
                  <SpeakerDetail key={speakerRec.id} speakerRec={speakerRec} />
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
