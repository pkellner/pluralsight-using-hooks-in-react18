import React, { useContext, useState } from "react";
import ImageToggleOnScroll from "../utils/ImageToggleOnScroll";
import SpeakerModal from "../speakerModal/SpeakerModal";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import EditSpeakerDialog from "./EditSpeakerDialog";

const SpeakerDetail = ({ speakerRec }) => {
  const { updateSpeaker, deleteSpeaker } = useContext(SpeakersDataContext);
  const [updating, setUpdating] = useState(false);

  return (
    <>
      {speakerRec && <SpeakerModal />}

      <div className="card col-4 cardmin">
        <ImageToggleOnScroll
          className="card-img-top"
          imageUrl={speakerRec.imageUrl}
          alt="{firstName} {lastName}"
        />

        {updating ? <i className="spinner-border text-secondary" /> : null}
        <div className="card-body">
          <h4 className="card-title">
            <button
              className={
                speakerRec.favorite ? "heartredbutton" : "heartdarkbutton"
              }
              onClick={(e) => {
                e.preventDefault();
                const newSpeakerRec = {
                  ...speakerRec,
                  favorite: !speakerRec.favorite,
                };
                setUpdating(true);
                updateSpeaker(newSpeakerRec, () => {
                  setUpdating(false);
                });
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
            <EditSpeakerDialog {...speakerRec} />

            <span>
              {speakerRec.firstName} {speakerRec.lastName}
            </span>
          </h4>

          <span>{speakerRec.userBioShort}</span>
          <div>
            <b>Company:</b> {speakerRec.company}
          </div>
          <div>
            <b>Twitter</b>: {speakerRec.twitterHandle}
          </div>
          <div>
            <b>Email</b>: {speakerRec.email}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerDetail;
