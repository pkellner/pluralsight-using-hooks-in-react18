import React, { useContext, useState, memo } from "react";
import FavoriteSpeakerToggleLine from "./FavoriteSpeakerToggleLine";

const SpeakerLine = ({ speakerRec, setSpeakerRec, updating }) => {
  console.log(
    `SpeakerLine: ${speakerRec.id}: ${speakerRec.firstName} ${speakerRec.lastName} `
  );

  return (
    <>
      <div className="col-12">
        <img
          src={speakerRec.imageUrl}
          width={100}
          alt={`${speakerRec?.firstName} ${speakerRec?.lastName}`}
        />
        {speakerRec.firstName} {speakerRec.lastName} <b>Company: </b>
        {speakerRec.company}
        <FavoriteSpeakerToggleLine
          speakerRec={speakerRec}
          setSpeakerRec={setSpeakerRec}
        >
          {updating ? (
            <i className="spinner-border text-dark" role="status" />
          ) : null}
        </FavoriteSpeakerToggleLine>
      </div>
    </>
  );
};

export default memo(SpeakerLine, (prevProps, nextProps) => {
  return (
    prevProps.speakerRec.favorite === nextProps.speakerRec.favorite &&
    prevProps.updating === nextProps.updating
  );
});
