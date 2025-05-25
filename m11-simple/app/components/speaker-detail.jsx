import React, { useState } from "react";
import SubTitle from "@/app/components/sub-title";
import SpeakerDetailContent from "@/app/components/speaker-detail-content";

export default function SpeakerDetail({
  speakersData,
  initialSelectedSpeakerId = 0,
  onBackClick,
}) {
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(
    initialSelectedSpeakerId || null,
  );

  const [transitionToSpeaker, setTransitionToSpeaker] = useState(null);
  const [transitionToSpeakerDirection, setTransitionToSpeakerDirection] = useState(null); // "left or right"

  const speakers = speakersData || [];

  if (!speakers || speakers.length === 0) {
    return null;
  }

  const currentSpeaker =
    speakers.find((speaker) => speaker.id === selectedSpeakerId) || speakers[0];
  const currentSpeakerIndex = speakers.findIndex(
    (speaker) => speaker.id === selectedSpeakerId,
  );
  const isFirstSpeaker = currentSpeakerIndex === 0;
  const isLastSpeaker = currentSpeakerIndex === speakers.length - 1;

  const currentSpeakerBefore = isFirstSpeaker
    ? null
    : speakers[currentSpeakerIndex - 1];
  const currentSpeakerAfter = isLastSpeaker
    ? null
    : speakers[currentSpeakerIndex + 1];


  console.log("/app/components/speaker-detail.jsx", "currentSpeaker",
    currentSpeakerBefore?.lastName ?? null, currentSpeaker?.lastName, currentSpeakerAfter?.lastName ?? null)

  function handlePreviousSpeaker() {
    if (!isFirstSpeaker) {
      setSelectedSpeakerId(speakers[currentSpeakerIndex - 1].id);
    }
  }

  function handleNextSpeaker() {
    if (!isLastSpeaker) {
      setSelectedSpeakerId(speakers[currentSpeakerIndex + 1].id);
    }
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-5">
            <SubTitle />
          </div>
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

          <div className="position-relative">
            {speakers.length > 1 && (
              <>
                <button
                  className="speaker-nav-btn speaker-nav-btn-prev"
                  onClick={handlePreviousSpeaker}
                  disabled={isFirstSpeaker}
                  aria-label="Previous speaker"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button
                  className="speaker-nav-btn speaker-nav-btn-next"
                  onClick={handleNextSpeaker}
                  disabled={isLastSpeaker}
                  aria-label="Next speaker"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}

            <SpeakerDetailContent
              key={currentSpeaker.id}
              currentSpeaker={currentSpeaker}
            />

            <>
              {speakers.length > 1 && (
                <nav
                  aria-label="Speaker pagination"
                  className="d-flex justify-content-center mt-3"
                >
                  <ul className="pagination pagination-sm mb-0">
                    <li
                      className={`page-item${
                        isFirstSpeaker ? " disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={handlePreviousSpeaker}
                        disabled={isFirstSpeaker}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </button>
                    </li>
                    {speakers.map((_, idx) => (
                      <li
                        key={idx}
                        className={`page-item${
                          idx === currentSpeakerIndex ? " active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setSelectedSpeakerId(speakers[idx].id)}
                          aria-current={
                            idx === currentSpeakerIndex ? "page" : undefined
                          }
                        >
                          {idx + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item${isLastSpeaker ? " disabled" : ""}`}
                    >
                      <button
                        className="page-link"
                        onClick={handleNextSpeaker}
                        disabled={isLastSpeaker}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
