import React, { unstable_ViewTransition as ViewTransition } from "react";
import SpeakerImage from "@/app/components/speaker-image";
import SpeakerName from "@/app/components/speaker-fields/speaker-name";
import SpeakerCompany from "@/app/components/speaker-fields/speaker-company";

export default function SpeakerListItem({ speaker, onSpeakerClick, isLoading }) {
  return (
    <ViewTransition key={speaker.id}>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="card border-0 shadow-sm mb-3">
          <div className="card-body p-0">
            <div className="row g-0 align-items-start py-3">
              <div className="col-4 d-flex justify-content-center align-items-start px-3">
                <SpeakerImage
                  speakerId={speaker.id}
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
                      <SpeakerName speaker={speaker} />
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
                    <SpeakerCompany speaker={speaker} />
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