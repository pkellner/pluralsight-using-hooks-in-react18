import React, { useContext, useState } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const SpeakerDetail = ({
  speakerRec,
  onHeartFavoriteHandler,
  speakingSunday,
  speakingSaturday,
}) => {
  const {
    id,
    firstName,
    lastName,
    favorite,
    userBioShort,
    company,
    twitterHandle,
  } = speakerRec;

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt="{firstName} {lastName}"
        speakingSaturday={speakingSaturday}
        speakingSunday={speakingSunday}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={(e) => {
              onHeartFavoriteHandler(e, speakerRec);
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>

        <span>{userBioShort}</span>
        <div>
          <b>Company:</b> {company}
        </div>
        <div>
          <b>Twitter</b>: {twitterHandle}
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetail;
