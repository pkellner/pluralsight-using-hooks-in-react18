import React, { useContext } from "react";
import ImageToggleOnScroll from "../utils/ImageToggleOnScroll";
import SpeakerModal from "../speakerModal/SpeakerModal";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import EditSpeakerDialog from "./EditSpeakerDialog";

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
            <EditSpeakerDialog {...speakerRec} />
        
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
