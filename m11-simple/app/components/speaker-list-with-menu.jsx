import React, {
  useState,
  useDeferredValue,
  startTransition,
  unstable_ViewTransition as ViewTransition,
} from "react";

function SpeakerMenu({
                       speakingSaturday,
                       setSpeakingSaturday,
                       speakingSunday,
                       setSpeakingSunday,
                       onExit,
                     }) {
  return (
    <div className="row justify-content-between align-items-center mb-4">
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
                onChange={() => {
                  startTransition(() => {
                    setSpeakingSaturday(!speakingSaturday);
                  });
                }}
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
                onChange={() => {
                  startTransition(() => {
                    setSpeakingSunday(!speakingSunday);
                  });
                }}
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

      <div className="col-auto">
        <button
          onClick={onExit}
          className="btn btn-accent btn-sm d-flex align-items-center gap-2 px-3 py-2"
        >
          <i className="bi bi-arrow-left"></i>
          <span>Exit</span>
        </button>
      </div>
    </div>
  );
}

function SpeakerImage({ imageUrl, alt, isLarge = false }) {
  const sizeClass = isLarge ? "speaker-image-large" : "speaker-image-thumb";

  return (
    <div className={`speaker-image-container ${sizeClass}`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={alt}
          className={`img-fluid rounded ${sizeClass}`}
          style={{
            width: isLarge ? "200px" : "80px",
            height: isLarge ? "200px" : "80px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          className="bg-primary d-flex align-items-center justify-content-center text-white rounded"
          style={{
            width: isLarge ? "200px" : "80px",
            height: isLarge ? "200px" : "80px",
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
    <ViewTransition key={speaker.id}>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="card border-0 shadow-sm mb-3">
          <div className="card-body p-0">
            <div className="row g-0 align-items-start py-3">
              <div className="col-4 d-flex justify-content-center align-items-start px-3">
                <SpeakerImage
                  imageUrl={speaker.imageUrl}
                  alt={`${speaker.firstName} ${speaker.lastName}`}
                  isLarge={false}
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
    </ViewTransition>
  );
}

export default function SpeakerListWithMenu({
                                              speakers,
                                              onSpeakerClick,
                                              onExit,
                                              loadingSpeakerId
                                            }) {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const deferredSpeakingSaturday = useDeferredValue(speakingSaturday);
  const deferredSpeakingSunday = useDeferredValue(speakingSunday);

  const filteredSpeakers = speakers.filter((speaker) => {
    if (!deferredSpeakingSaturday && !deferredSpeakingSunday) {
      return false;
    }
    if (deferredSpeakingSaturday && deferredSpeakingSunday) {
      return speaker.sat || speaker.sun;
    }
    if (deferredSpeakingSaturday) {
      return speaker.sat;
    }
    if (deferredSpeakingSunday) {
      return speaker.sun;
    }
    return false;
  });

  // NEED TO PUT SELECTEDSPEAKERID HERE, AND THEN TOGGLE BETWEEN RETURN THE "MENU AND LIST" AND THE "SPEAKERDETAIL"
  // NEED TO PASS SELECTEDSPEAKERID TO SPEAKERDETAIL BUT HAVE IT DISPLAY NULL OR THE RIGHT SPEAKER WHEN APPROPRIATE

  return (
    <div>
      <SpeakerMenu
        speakingSaturday={speakingSaturday}
        setSpeakingSaturday={setSpeakingSaturday}
        speakingSunday={speakingSunday}
        setSpeakingSunday={setSpeakingSunday}
        onExit={onExit}
      />

      <div className="row g-4">
        {filteredSpeakers.map((speaker) => (
          <SpeakerListItem
            key={speaker.id}
            speaker={speaker}
            onSpeakerClick={onSpeakerClick}
            isLoading={loadingSpeakerId === speaker.id}
          />
        ))}
      </div>
    </div>
  );
}