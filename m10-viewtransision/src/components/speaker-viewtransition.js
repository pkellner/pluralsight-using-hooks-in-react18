import { useState, useEffect, useTransition } from "react";

function SpeakerImage({ imageUrl, alt, isLarge = false }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const sizeClass = isLarge ? "speaker-image-large" : "speaker-image-thumb";

  return (
    <div className={`speaker-image-container ${sizeClass}`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={alt}
          className={`img-fluid rounded ${sizeClass}`}
          onLoad={() => setImageLoaded(true)}
          style={{
            width: isLarge ? "200px" : "80px",
            height: isLarge ? "200px" : "80px",
            objectFit: "cover"
          }}
        />
      ) : (
        <div
          className="bg-primary d-flex align-items-center justify-content-center text-white"
          style={{
            width: isLarge ? "200px" : "80px",
            height: isLarge ? "200px" : "80px"
          }}
        >
          <i className="bi bi-person-fill fs-1"></i>
        </div>
      )}
    </div>
  );
}

function SpeakerListItem({ speaker, onSpeakerClick, isLoading }) {
  return (
    <div className="col-xl-12 col-md-12">
      <div className="card border-0 mb-3">
        <div className="card-body p-3">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <SpeakerImage
                imageUrl={speaker.imageUrl}
                alt={`${speaker.firstName} ${speaker.lastName}`}
                isLarge={false}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onSpeakerClick(speaker.id);
                      }}
                      className="text-decoration-none"
                    >
                      {speaker.firstName} {speaker.lastName}
                      {isLoading && (
                        <span className="ms-2">
                          <div className="spinner-border spinner-border-sm text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </span>
                      )}
                    </a>
                  </h5>
                  <small className="text-muted">
                    <strong>Company:</strong> {speaker.company}
                  </small>
                  <p className="mb-1 text-muted small">{speaker.userBioShort}</p>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`sat-${speaker.id}`}
                      checked={speaker.sat}
                      readOnly
                    />
                    <label className="form-check-label small" htmlFor={`sat-${speaker.id}`}>
                      Sat
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`sun-${speaker.id}`}
                      checked={speaker.sun}
                      readOnly
                    />
                    <label className="form-check-label small" htmlFor={`sun-${speaker.id}`}>
                      Sun
                    </label>
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

function SpeakerDetail({ speaker, onBackClick }) {
  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <div className="mb-3">
            <button
              className="btn btn-outline-primary"
              onClick={onBackClick}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Speakers
            </button>
          </div>
          <div className="card border-0 shadow-sm">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center p-4">
                <SpeakerImage
                  imageUrl={speaker.imageUrl}
                  alt={`${speaker.firstName} ${speaker.lastName}`}
                  isLarge={true}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h2 className="card-title mb-3">
                    {speaker.firstName} {speaker.lastName}
                  </h2>

                  <div className="mb-3">
                    <h6 className="text-muted mb-2">Biography</h6>
                    <p className="card-text">{speaker.bio}</p>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <h6 className="text-muted mb-1">Company</h6>
                      <p className="mb-0">{speaker.company}</p>
                    </div>
                    {speaker.twitterHandle && (
                      <div className="col-md-6">
                        <h6 className="text-muted mb-1">Twitter</h6>
                        <p className="mb-0">@{speaker.twitterHandle}</p>
                      </div>
                    )}
                  </div>

                  {speaker.email && (
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">Email</h6>
                      <p className="mb-0">{speaker.email}</p>
                    </div>
                  )}

                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`detail-sat-${speaker.id}`}
                        checked={speaker.sat}
                        readOnly
                      />
                      <label className="form-check-label" htmlFor={`detail-sat-${speaker.id}`}>
                        Saturday Session
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`detail-sun-${speaker.id}`}
                        checked={speaker.sun}
                        readOnly
                      />
                      <label className="form-check-label" htmlFor={`detail-sun-${speaker.id}`}>
                        Sunday Session
                      </label>
                    </div>
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

function SpeakersNew() {
  const [speakers, setSpeakers] = useState([]);
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [loadingSpeakerId, setLoadingSpeakerId] = useState(null);

  useEffect(() => {
    async function loadSpeakers() {
      try {
        const response = await fetch('/api/speakers');
        const data = await response.json();
        setSpeakers(data);
      } catch (error) {
        console.error('Error loading speakers:', error);
      } finally {
        setIsInitialLoading(false);
      }
    }

    loadSpeakers();
  }, []);

  async function handleSpeakerClick(speakerId) {
    setLoadingSpeakerId(speakerId);

    startTransition(async () => {
      try {
        const response = await fetch(`/api/speakers/${speakerId}`);
        const speakerData = await response.json();
        setSelectedSpeaker(speakerData);
        setSelectedSpeakerId(speakerId);
      } catch (error) {
        console.error('Error loading speaker details:', error);
      } finally {
        setLoadingSpeakerId(null);
      }
    });
  }

  function handleBackClick() {
    setSelectedSpeakerId(null);
    setSelectedSpeaker(null);
  }

  if (isInitialLoading) {
    return (
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading speakers...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSpeaker) {
    return (
      <SpeakerDetail
        speaker={selectedSpeaker}
        onBackClick={handleBackClick}
      />
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Speakers</h1>
        </div>
      </div>

      <div className="row g-3">
        {speakers.map((speaker) => (
          <SpeakerListItem
            key={speaker.id}
            speaker={speaker}
            onSpeakerClick={handleSpeakerClick}
            isLoading={loadingSpeakerId === speaker.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakersNew;