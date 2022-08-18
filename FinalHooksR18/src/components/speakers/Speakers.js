import React, { useContext } from "react";

import SpeakerDetail from "./SpeakerDetail";
import { SpeakerModalProvider } from "../../contexts/SpeakerModalContext";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../../hooks/useSpeakerSortAndFilter";
import SpeakerMenu from "./SpeakerMenu";
import { SpeakerMenuProvider } from "../../contexts/SpeakerMenuContext";

const Speakers = () => {
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);

  const speakerListFiltered = useSpeakerSortAndFilter(speakerList);
  if (loadingStatus === "hasErrored") return <div>Errored on load</div>;

  return (
    <>
      <SpeakerMenuProvider>
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
      </SpeakerMenuProvider>
    </>
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
