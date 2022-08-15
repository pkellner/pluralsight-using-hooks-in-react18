import React from "react";
import ImageToggleOnScroll from "../utils/ImageToggleOnScroll";
import SpeakerModal from "../speakerModal/SpeakerModal";
import EditSpeakerDialog from "./EditSpeakerDialog";
import FavoriteSpeakerToggle from "./FavoriteSpeakerToggle";
import DeleteSpeakerButton from "./DeleteSpeakerButton";

const SpeakerDetail = ({ speakerRec }) => {
  return (
    <>
      {speakerRec && <SpeakerModal />}
      <div className="card col-4 cardmin">
        <ImageToggleOnScroll
          className="card-img-top"
          imageUrl={speakerRec.imageUrl}
          alt="{firstName} {lastName}"
        />
        <div className="card-body">
          <h4 className="card-title">
            <FavoriteSpeakerToggle speakerRec={speakerRec} />
            <DeleteSpeakerButton id={speakerRec.id} />
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
