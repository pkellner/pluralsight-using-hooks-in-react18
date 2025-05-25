import React, { useState } from "react";
import SpeakerImage from "@/app/components/speaker-image";
import SubTitle from "@/app/components/sub-title";
import SpeakerName from "@/app/components/speaker-fields/speaker-name";
import SpeakerCompany from "@/app/components/speaker-fields/speaker-company";

export default function SpeakerDetail({ speakersData, initialSelectedSpeakerId = 0, onBackClick }) {
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(initialSelectedSpeakerId || null);

  const speakers = speakersData || [];

  if (!speakers || speakers.length === 0) {
    return null;
  }


  const currentSpeaker = speakers.find(speaker => speaker.id === selectedSpeakerId) || speakers[0];
  const currentSpeakerIndex = speakers.findIndex(speaker => speaker.id === selectedSpeakerId);
  const isFirstSpeaker = currentSpeakerIndex === 0;
  const isLastSpeaker = currentSpeakerIndex === speakers.length - 1;

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
            <button
              className="btn btn-outline-primary"
              onClick={onBackClick}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Speakers
            </button>
          </div>

          <div className="position-relative">
            {speakers.length > 1 && (
              <>
                <button
                  className={`btn btn-outline-secondary position-absolute top-50 start-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center ${
                    isFirstSpeaker ? 'opacity-25' : ''
                  }`}
                  style={{ width: '48px', height: '48px', zIndex: 10, marginLeft: '-24px' }}
                  onClick={handlePreviousSpeaker}
                  disabled={isFirstSpeaker}
                  aria-label="Previous speaker"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button
                  className={`btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center ${
                    isLastSpeaker ? 'opacity-25' : ''
                  }`}
                  style={{ width: '48px', height: '48px', zIndex: 10, marginRight: '-24px' }}
                  onClick={handleNextSpeaker}
                  disabled={isLastSpeaker}
                  aria-label="Next speaker"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}

            <div className="card border-0 shadow">
              <div className="row g-0">
                <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
                  <SpeakerImage
                    key={currentSpeaker.id}
                    speakerId={currentSpeaker.id}
                    imageUrl={currentSpeaker.imageUrl}
                    alt={`${currentSpeaker.firstName} ${currentSpeaker.lastName}`}
                    isLarge={true}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body p-5">
                    <h2 className="card-title mb-4">
                      <SpeakerName speaker={currentSpeaker} />
                    </h2>

                    <div className="mb-4">
                      <h5 className="text-muted mb-3">Biography</h5>
                      <p className="card-text lh-lg">{currentSpeaker.bio}</p>
                    </div>

                    <div className="row mb-4">
                      <div className="col-lg-6 mb-3">
                        <h6 className="text-muted mb-2">Company</h6>
                        <p className="mb-0 fw-medium">
                          <SpeakerCompany speaker={currentSpeaker} />
                        </p>
                      </div>
                    </div>

                    {currentSpeaker.email && (
                      <div className="mb-4">
                        <h6 className="text-muted mb-2">Email</h6>
                        <p className="mb-0 fw-medium">{currentSpeaker.email}</p>
                      </div>
                    )}

                    <div className="d-flex gap-4">
                      {currentSpeaker.sun && currentSpeaker.sat && (
                        <i>Speaking Saturday and Sunday</i>
                      )}
                      {!currentSpeaker.sun && currentSpeaker.sat && (
                        <i>Speaking Saturday</i>
                      )}
                      {currentSpeaker.sun && !currentSpeaker.sat && (
                        <i>Speaking Sunday</i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {speakers.length > 1 && (
              <div className="text-center mt-3">
                <small className="text-muted">
                  Speaker {currentSpeakerIndex + 1} of {speakers.length}
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}