import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const SpeakerDetail = ({
  speakerRec,
  onHeartFavoriteHandler,
  deleteSpeaker,
  speakingSunday,
  speakingSaturday,
  setUpdating,
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
    imageUrl,
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
              setUpdating(true);
              deleteSpeaker(speakerRec.id, () => {
                setUpdating(false);
              });
            }}
          >
            Delete Speaker <i className="fa fa-trash"></i>{" "}
          </button>
          <br />

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
