import FavoriteSpeakerUpdate from "./FavoriteSpeakerUpdate";

export default function SpeakerDetailRecord({
  speakerRec,
  setSpeakers,
  slideDir,
  animationClass,
}) {
  return (
    <div
      className={`card border-0 carousel-speaker-card ${animationClass || ""}`}
    >
      <div className="row g-0">
        <div className="col-4">
          <img
            src={speakerRec.imageUrl}
            alt="speaker"
            width={200}
            height={200}
            className="img-fluid rounded-start speaker-image"
          />
        </div>

        <div className="col-8 d-flex flex-column flex-nowrap">
          <div className="card-body">
            <div className="speaker-action d-flex">
              <div className="favoriteToggleWrapper">
                <FavoriteSpeakerUpdate
                  speakerRec={speakerRec}
                  completionFunction={function (speakerRec) {
                    console.log("completionFunction called with:", speakerRec);
                    setSpeakers((prevSpeakers) =>
                      prevSpeakers.map(function (s) {
                        return s.id === speakerRec.id ? speakerRec : s;
                      }),
                    );
                  }}
                />
              </div>
            </div>
            <h4 className="card-title">
              {speakerRec.firstName} {speakerRec.lastName}
            </h4>
            <p className="card-text">{speakerRec.bio}</p>
          </div>

          <div className="card-footer text-muted d-flex flex-wrap justify-content-between align-items-center">
            {speakerRec.company?.length ? (
              <small>
                <strong>Company:</strong> {speakerRec.company}
              </small>
            ) : null}

            {speakerRec.twitterHandle?.length ? (
              <small>
                <strong>Twitter:</strong> {speakerRec.twitterHandle}
              </small>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
