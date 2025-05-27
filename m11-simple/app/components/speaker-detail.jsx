import React, { startTransition, useState } from "react";
import SubTitle from "@/app/components/sub-title";
import SpeakerDetailContent from "@/app/components/speaker-detail-content";

export default function SpeakerDetail({
                                        speakersData,
                                        initialSelectedSpeakerId = 0,
                                        onBackClick,
                                      }) {
  /* ---------- derive speaker list ---------- */
  const speakers = speakersData ?? [];
  if (speakers.length === 0) return null;

  /* ---------- state ---------- */
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(
    initialSelectedSpeakerId || speakers[0].id,
  );
  const [slideDir, setSlideDir] = useState(null); // "next" | "prev"

  /* ---------- helpers ---------- */
  const currentIndex = speakers.findIndex((s) => s.id === selectedSpeakerId);
  const currentSpeaker = speakers[currentIndex];

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === speakers.length - 1;

  function changeSpeaker(toIndex) {
    if (toIndex < 0 || toIndex >= speakers.length) return;

    setSlideDir(function() {
      return (toIndex > currentIndex ? "next" : "prev");
    });
    startTransition(() => {
      console.log("/app/components/speakerDetail: changeSpeaker:toIndex:",toIndex);
      setSelectedSpeakerId(speakers[toIndex].id);
    });
  }

  /* ---------- render ---------- */
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <SubTitle />
        </div>
      </div>

      <button className="btn btn-outline-primary mb-4" onClick={onBackClick}>
        <i className="bi bi-arrow-left me-2"></i>
        Back&nbsp;to&nbsp;Speakers
      </button>

      <div className="position-relative">
        {/* nav arrows */}
        {speakers.length > 1 && (
          <>
            <button
              className="speaker-nav-btn speaker-nav-btn-prev"
              onClick={() => changeSpeaker(currentIndex - 1)}
              disabled={isFirst}
              aria-label="Previous speaker"
            >
              <i className="fas fa-chevron-left" />
            </button>

            <button
              className="speaker-nav-btn speaker-nav-btn-next"
              onClick={() => changeSpeaker(currentIndex + 1)}
              disabled={isLast}
              aria-label="Next speaker"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </>
        )}

        {/* animated card */}
        <SpeakerDetailContent
          key={currentSpeaker.id}
          currentSpeaker={currentSpeaker}
          slideDir={slideDir} // "next" | "prev"
        />
      </div>

      {/* pager dots */}
      {speakers.length > 1 && (
        <nav
          aria-label="Speaker pagination"
          className="d-flex justify-content-center mt-3"
        >
          <ul className="pagination pagination-sm mb-0">
            {speakers.map((_, idx) => (
              <li
                key={idx}
                className={`page-item${idx === currentIndex ? " active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => changeSpeaker(idx)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
