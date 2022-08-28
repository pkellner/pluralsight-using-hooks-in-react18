import React, { useCallback, useContext, useState } from "react";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../../hooks/useSpeakerSortAndFilter";
import SpeakerMenu from "./SpeakerMenu";
import SpeakerLine from "./SpeakerLine";

const SpeakerList = () => {
  const { data: speakerList, updateSpeaker, loadingStatus } = useContext(
    SpeakersDataContext
  );
  const [updatingSpeakerId, setUpdatingSpeakerId] = useState(0);

  const setSpeakerRec = (newSpeakerRec) => {
    setUpdatingSpeakerId(newSpeakerRec.id);
    updateSpeaker(newSpeakerRec, () => {
      setUpdatingSpeakerId(0); // 0 means no speaker updating
    });
  };

  // const setSpeakerRec = (newSpeakerRec) => {
  //   setUpdatingSpeakerId(newSpeakerRec.id);
  //   updateSpeaker(newSpeakerRec, () => {
  //     setUpdatingSpeakerId(0); // 0 means no speaker updating
  //   });
  // };

  if (loadingStatus === "hasErrored") return <div>Errored on load</div>;

  const speakerListFiltered = useSpeakerSortAndFilter(speakerList);

  return (
    <>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          {speakerListFiltered.map((speakerRec) => {
            return (
              <SpeakerLine
                key={speakerRec.id}
                speakerRec={speakerRec}
                setSpeakerRec={setSpeakerRec}
                updating={updatingSpeakerId === speakerRec.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpeakerList;
