import React, { useContext, useState } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";
import { FavoriteClickCountContext } from "./FavoriteClickCountContext";

//const SpeakerDetail = React.memo(({ speakerRec, onHeartFavoriteHandler }) => {
const SpeakerDetail = ({ speakerRec, onHeartFavoriteHandler, speakingSunday, speakingSaturday }) => {
  const {
    id,
    firstName,
    lastName,
    bio,
    favorite,
    userBioShort,
    company,
    twitterHandle,
  } = speakerRec;

  const { incrementFavoriteClickCount } = useContext(FavoriteClickCountContext);

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
              incrementFavoriteClickCount();
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
