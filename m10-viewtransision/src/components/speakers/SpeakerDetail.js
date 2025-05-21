import FavoriteSpeakerToggle from "./FavoriteSpeakerToggle";
import SpeakerImageToggleOnScroll from "./SpeakerImageToggleOnScroll";

export default function SpeakerDetail({ speakerRec, showDetails, onBackToList }) {
  if (!speakerRec) return null;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button
              className="btn btn-outline-primary"
              onClick={onBackToList}
            >
              ← Back to Speakers
            </button>
            <div className="favoriteToggleWrapper">
              <FavoriteSpeakerToggle speakerRec={speakerRec} />
            </div>
          </div>

          <div className="card border-0 shadow-lg">
            <div className="row g-0">
              <div className="col-lg-6">
                <div style={{ height: '100%', minHeight: '500px' }}>
                  <SpeakerImageToggleOnScroll
                    imageUrl={speakerRec?.imageUrl}
                    alt={`${speakerRec?.firstName} ${speakerRec?.lastName}`}
                    thumbNail={false}
                  />
                </div>
              </div>

              <div className="col-lg-6 d-flex flex-column">
                <div className="card-body flex-grow-1 p-5">
                  <h1 className="display-3 mb-4">
                    {speakerRec.firstName} {speakerRec.lastName}
                  </h1>

                  {showDetails === true ? (
                    <div className="card-text">
                      <p className="lead fs-4 lh-lg">{speakerRec.bio}</p>
                    </div>
                  ) : (
                    <p className="card-text fs-4">{speakerRec.userBioShort}</p>
                  )}
                </div>

                <div className="card-footer bg-light p-5">
                  <div className="row">
                    {speakerRec?.company?.length > 0 && (
                      <div className="col-12 mb-4">
                        <h5 className="text-muted mb-2">Company</h5>
                        <p className="mb-0 fs-4">{speakerRec.company}</p>
                      </div>
                    )}

                    {speakerRec.twitterHandle?.length > 0 && (
                      <div className="col-12 mb-4">
                        <h5 className="text-muted mb-2">Twitter</h5>
                        <p className="mb-0 fs-4">{speakerRec.twitterHandle}</p>
                      </div>
                    )}

                    {speakerRec.email?.length > 0 && (
                      <div className="col-12 mb-4">
                        <h5 className="text-muted mb-2">Email</h5>
                        <p className="mb-0 fs-4">{speakerRec.email}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}