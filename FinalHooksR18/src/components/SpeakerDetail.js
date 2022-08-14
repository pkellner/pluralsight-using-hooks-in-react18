import React, { useContext } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";
import { SpeakerModalContext } from "../contexts/SpeakerModalContext";
import SpeakerModal from "./SpeakersModal/SpeakerModal";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";

const SpeakerDetail = ({
  speakerRec,
  onHeartFavoriteHandler,
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

  const {
    setModalShow,
    modalShow,
    modalSpeakerId,
    setModalSpeakerId,
    modalSpeakerFirstName,
    setModalSpeakerFirstName,
    modalSpeakerLastName,
    setModalSpeakerLastName,
    modalSpeakerImageUrl,
    setModalSpeakerImageUrl
  } = useContext(SpeakerModalContext);
  
  const {
    data,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus,
  } = useContext(SpeakersDataContext);

  return (
    <>
      {speakerRec && <SpeakerModal />}

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
                deleteSpeaker(id, () => {
                  setUpdating(false);
                });
              }}
            >
              Delete Speaker <i className="fa fa-trash"></i>{" "}
            </button>
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                setModalSpeakerId(id);
                
                setModalSpeakerFirstName(firstName);
                setModalSpeakerLastName(lastName);
                setModalSpeakerImageUrl(imageUrl);

                setModalShow(true);
              }}
            >
              Edit Speaker <i className="fa fa-edit"></i>{" "}
            </button>

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
    </>
  );
};

export default SpeakerDetail;
