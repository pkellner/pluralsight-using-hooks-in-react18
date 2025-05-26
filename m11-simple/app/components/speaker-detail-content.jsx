import React, {
  unstable_ViewTransition as ViewTransition,
} from "react";
import SpeakerImage from "@/app/components/speaker-image";
import SpeakerName from "@/app/components/speaker-fields/speaker-name";
import SpeakerCompany from "@/app/components/speaker-fields/speaker-company";

export default function SpeakerDetailContent({ currentSpeaker, direction }) {
  const { id, firstName, lastName, bio, imageUrl, email, sat, sun } =
    currentSpeaker;

  /* decide which CSS class to use based on navigation direction */
  const enterClass = direction === "left" ? "slide-in" : "slide-out";
  const exitClass = direction === "left" ? "slide-out" : "slide-in";

  return (
    <ViewTransition
      /* unique name avoids duplicate-name warnings */
      name={`speaker-${id}`}
      enter={enterClass}
      exit={exitClass}
    >
      <div className="card speaker-detail-card">
        <div className="row g-0">
          <div className="col-md-5 d-flex justify-content-center align-items-center p-2">
            <div className="speaker-image-container" style={{ transform: "scale(0.7)" }}>
              <SpeakerImage
                speakerId={id}
                imageUrl={imageUrl}
                alt={`${firstName} ${lastName}`}
                isLarge
              />
            </div>
          </div>

          <div className="col-md-7">
            <div className="card-body p-5">
              <h2 className="card-title mb-4">
                <SpeakerName speaker={currentSpeaker} />
              </h2>

              <section className="speaker-bio-section mb-4">
                <h5 className="text-muted mb-3">Biography</h5>
                <p className="card-text lh-lg">{bio}</p>
              </section>

              <section className="speaker-meta-section">
                <div className="row mb-4">
                  <div className="col-lg-6 mb-3">
                    <h6 className="text-muted mb-2">Company</h6>
                    <p className="mb-0 fw-medium">
                      <SpeakerCompany speaker={currentSpeaker} />
                    </p>
                  </div>
                </div>

                {email && (
                  <div className="mb-4">
                    <h6 className="text-muted mb-2">Email</h6>
                    <p className="mb-0 fw-medium">{email}</p>
                  </div>
                )}

                <div className="d-flex gap-4">
                  {sun && sat && <i>Speaking Saturday and Sunday</i>}
                  {!sun && sat && <i>Speaking Saturday</i>}
                  {sun && !sat && <i>Speaking Sunday</i>}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
