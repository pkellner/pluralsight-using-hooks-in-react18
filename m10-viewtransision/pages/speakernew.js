import {
  startTransition,
  useTransition,
  unstable_ViewTransition as ViewTransition,
  useEffect,
  useState,
} from "react";

function SpeakerImage({ id, imageUrl, alt, isLarge = false }) {
  const sizeClass = isLarge ? "speaker-image-large" : "speaker-image-thumb";

  return (
    <div>
      <ViewTransition name={`IMAGE-${id}`}>
        <div className={`speaker-image-container ${sizeClass}`}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={alt}
              className={`img-fluid rounded ${sizeClass}`}
              style={{
                width: isLarge ? "200px" : "120px",
                height: isLarge ? "200px" : "120px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              className="bg-primary d-flex align-items-center justify-content-center text-white rounded"
              style={{
                width: isLarge ? "200px" : "120px",
                height: isLarge ? "200px" : "120px",
              }}
            >
              <i
                className={`bi bi-person-fill ${isLarge ? "fs-1" : "fs-2"}`}
              ></i>
            </div>
          )}
        </div>
      </ViewTransition>
    </div>
  );
}

function SpeakerListItem({ speaker, onSpeakerClick, isLoading }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body p-0">
          <div className="row g-0 align-items-start py-3">
            <div className="col-4 d-flex justify-content-center align-items-start px-3">
              <SpeakerImage
                imageUrl={speaker.imageUrl}
                alt={`${speaker.firstName} ${speaker.lastName}`}
                isLarge={false}
                id={speaker.id}
              />
            </div>

            <div className="col-8">
              <div className="card-body px-3 py-0">
                <h6 className="card-title mb-2 fs-6">
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
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </span>
                    )}
                  </a>
                </h6>
                <p className="card-subtitle mb-2 text-muted">
                  {speaker.company}
                </p>
                <p className="card-text text-muted mb-0">
                  {speaker.userBioShort}
                </p>
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
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">
            Silicon Valley Code Camp Speakers
          </h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="mb-4">
            <button className="btn btn-outline-primary" onClick={onBackClick}>
              <i className="bi bi-arrow-left me-2"></i>
              Back to Speakers
            </button>
          </div>

          <div className="card border-0 shadow">
            <div className="row g-0">
              <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
                <SpeakerImage
                  imageUrl={speaker.imageUrl}
                  alt={`${speaker.firstName} ${speaker.lastName}`}
                  isLarge={true}
                  id={speaker.id}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body p-5">
                  <h2 className="card-title mb-4">
                    {speaker.firstName} {speaker.lastName}
                  </h2>

                  <div className="mb-4">
                    <h5 className="text-muted mb-3">Biography</h5>
                    <p className="card-text lh-lg">{speaker.bio}</p>
                  </div>

                  <div className="row mb-4">
                    <div className="col-lg-6 mb-3">
                      <h6 className="text-muted mb-2">Company</h6>
                      <p className="mb-0 fw-medium">{speaker.company}</p>
                    </div>
                    {speaker.twitterHandle && (
                      <div className="col-lg-6 mb-3">
                        <h6 className="text-muted mb-2">Twitter</h6>
                        <p className="mb-0 fw-medium">
                          @{speaker.twitterHandle}
                        </p>
                      </div>
                    )}
                  </div>

                  {speaker.email && (
                    <div className="mb-4">
                      <h6 className="text-muted mb-2">Email</h6>
                      <p className="mb-0 fw-medium">{speaker.email}</p>
                    </div>
                  )}

                  <div className="d-flex gap-4">
                    {speaker.sun && speaker.sat && (
                      <i>Speaking Saturday and Sunday</i>
                    )}
                    {!speaker.sun && speaker.sat && <i>Speaking Saturday</i>}
                    {speaker.sun && !speaker.sat && <i>Speaking Sunday</i>}
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

function SpeakerMenu({
  speakingSaturday,
  setSpeakingSaturday,
  speakingSunday,
  setSpeakingSunday,
}) {
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-auto">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Speaker toolbar filter"
        >
          <div className="toolbar-trigger d-flex gap-4 align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="saturday-filter"
                onChange={() => setSpeakingSaturday(!speakingSaturday)}
                checked={speakingSaturday}
              />
              <label
                className="form-check-label fw-medium"
                htmlFor="saturday-filter"
              >
                Saturday Speakers
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="sunday-filter"
                onChange={() => setSpeakingSunday(!speakingSunday)}
                checked={speakingSunday}
              />
              <label
                className="form-check-label fw-medium"
                htmlFor="sunday-filter"
              >
                Sunday Speakers
              </label>
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
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  useEffect(() => {
    async function loadSpeakers() {
      try {
        const response = await fetch("/api/speakers");
        const data = await response.json();
        setSpeakers(data);
      } catch (error) {
        console.error("Error loading speakers:", error);
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

        // Force 1 second delay to demonstrate loading state
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSelectedSpeaker(speakerData);
        setSelectedSpeakerId(speakerId);
      } catch (error) {
        console.error("Error loading speaker details:", error);
      } finally {
        setLoadingSpeakerId(null);
      }
    });
  }

  function handleBackClick() {
    setSelectedSpeakerId(null);
    setSelectedSpeaker(null);
  }

  const filteredSpeakers = speakers.filter((speaker) => {
    if (!speakingSaturday && !speakingSunday) {
      return false;
    }
    if (speakingSaturday && speakingSunday) {
      return speaker.sat || speaker.sun;
    }
    if (speakingSaturday) {
      return speaker.sat;
    }
    if (speakingSunday) {
      return speaker.sun;
    }
    return false;
  });

  if (isInitialLoading) {
    return (
      <div className="container py-5">
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
      <SpeakerDetail speaker={selectedSpeaker} onBackClick={handleBackClick} />
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-5">
            Silicon Valley Code Camp Speakers
          </h1>

          <SpeakerMenu
            speakingSaturday={speakingSaturday}
            setSpeakingSaturday={setSpeakingSaturday}
            speakingSunday={speakingSunday}
            setSpeakingSunday={setSpeakingSunday}
          />
        </div>
      </div>

      <div className="row g-4">
        {filteredSpeakers.map((speaker) => (
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
