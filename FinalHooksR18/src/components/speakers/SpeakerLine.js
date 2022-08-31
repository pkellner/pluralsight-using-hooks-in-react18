import React, { memo } from "react";
import FavoriteSpeakerToggleLine from "./FavoriteSpeakerToggleLine";

const SpeakerLine = ({ speakerRec, toggleFavoriteSpeaker, updating }) => {
  // console.log(
  //   `SpeakerLine: ${speakerRec.id}: ${speakerRec.firstName} ${speakerRec.lastName} `
  // );

  return (
    <>
      <div className="col-xl-12 col-md-12">
        <div className="card border-0 speaker-list">
          <div className="card-body p-0">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img
                  src={speakerRec.imageUrl}
                  width={80}
                  alt={`${speakerRec?.firstName} ${speakerRec?.lastName}`}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="list-group">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                      {speakerRec.firstName} {speakerRec.lastName}
                    </h5>
                  </div>
                  <small className="text-muted">
                    <strong>Company: </strong> {speakerRec.company}
                  </small>
                  <div className="spinner-bottom">
                    <FavoriteSpeakerToggleLine
                      speakerRec={speakerRec}
                      toggleFavoriteSpeaker={toggleFavoriteSpeaker}
                    >
                      {updating ? (
                        <i
                          className="spinner-border text-dark"
                          role="status"
                        />
                      ) : null}
                    </FavoriteSpeakerToggleLine>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
