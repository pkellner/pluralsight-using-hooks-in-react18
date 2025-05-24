import React, { unstable_ViewTransition as ViewTransition } from "react";
import SpeakerImage from "@/app/components/speaker-image";
import SubTitle from "@/app/components/sub-title";

export default function SpeakerDetail({ speakerData, onBackClick }) {
  return (
    <ViewTransition>
      {speakerData ? (
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

              <div className="card border-0 shadow">
                <div className="row g-0">
                  <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
                    <SpeakerImage
                      speakerId={speakerData.id}
                      imageUrl={speakerData.imageUrl}
                      alt={`${speakerData.firstName} ${speakerData.lastName}`}
                      isLarge={true}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-5">
                      <h2 className="card-title mb-4">
                        <ViewTransition key={`${speakerData.id}`} name={`SPEAKER_NAME_${speakerData.id}`}>
                          {speakerData.firstName} {speakerData.lastName}
                        </ViewTransition>
                      </h2>

                      <div className="mb-4">
                        <h5 className="text-muted mb-3">Biography</h5>
                        <p className="card-text lh-lg">{speakerData.bio}</p>
                      </div>

                      <div className="row mb-4">
                        <div className="col-lg-6 mb-3">
                          <h6 className="text-muted mb-2">Company</h6>
                          <p className="mb-0 fw-medium">
                            {speakerData.company}
                          </p>
                        </div>
                        {speakerData.twitterHandle && (
                          <div className="col-lg-6 mb-3">
                            <h6 className="text-muted mb-2">Twitter</h6>
                            <p className="mb-0 fw-medium">
                              @{speakerData.twitterHandle}
                            </p>
                          </div>
                        )}
                      </div>

                      {speakerData.email && (
                        <div className="mb-4">
                          <h6 className="text-muted mb-2">Email</h6>
                          <p className="mb-0 fw-medium">{speakerData.email}</p>
                        </div>
                      )}

                      <div className="d-flex gap-4">
                        {speakerData.sun && speakerData.sat && (
                          <i>Speaking Saturday and Sunday</i>
                        )}
                        {!speakerData.sun && speakerData.sat && (
                          <i>Speaking Saturday</i>
                        )}
                        {speakerData.sun && !speakerData.sat && (
                          <i>Speaking Sunday</i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ViewTransition>
  );
}
