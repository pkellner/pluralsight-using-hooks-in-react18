import React, { useContext, useState } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const SpeakerDetail = ({
  speakerRec,
  onHeartFavoriteHandler,
  createSpeaker,
  deleteSpeaker,
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
    email,
    imageUrl
  } = speakerRec;

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        imageUrl={imageUrl}
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
          
  
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteSpeaker(speakerRec.id);
            }}
          >Delete Speaker</button><br/>
          
          
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
        <div>
          <b>Email</b>: {email}
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetail;
