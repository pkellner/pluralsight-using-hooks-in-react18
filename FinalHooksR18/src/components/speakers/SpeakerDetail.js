import React, { useContext } from "react";
import SpeakerImageToggleOnScroll from "./SpeakerImageToggleOnScroll";
import SpeakerModal from "../speakerModal/SpeakerModal";
import EditSpeakerDialog from "./EditSpeakerDialog";
import FavoriteSpeakerToggle from "./FavoriteSpeakerToggle";
import DeleteSpeakerButton from "./DeleteSpeakerButton";
import { AppRouterContext } from "../../contexts/AppRouterContext";

const SpeakerDetail = ({ speakerRec, showDetails }) => {
  const { setRoute } = useContext(AppRouterContext);
  
  //if (!speakerRec) return null;
  
  return (
    <>
      {speakerRec && <SpeakerModal />}
      <div className="col-md-4">
        <div className="card shadow border-0">
          <SpeakerImageToggleOnScroll
            className="card-img-top"
            imageUrl={speakerRec.imageUrl}
            alt="{firstName} {lastName}"
          />
          <div className="card-body">
            <h4 className="card-title">
              <FavoriteSpeakerToggle speakerRec={speakerRec} />
              <DeleteSpeakerButton id={speakerRec.id} />
              <EditSpeakerDialog {...speakerRec} />
              <br />
              <br />
              <span>
                <a
                  onClick={() => {
                    setRoute(`/speaker/${speakerRec.id}`);
                  }}
                  href="#"
                >
                  {speakerRec.firstName} {speakerRec.lastName}
                </a>
              </span>
            </h4>
    
            {showDetails === true ?
              <>
                <span>{speakerRec.bio}</span>
                
              </>
              : <>
                <span>{speakerRec.userBioShort}</span>
              </>
            }
            <div>
              <b>Company:</b> {speakerRec.company}
            </div>
            <div>
              <b>Twitter</b>: {speakerRec.twitterHandle}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerDetail;
