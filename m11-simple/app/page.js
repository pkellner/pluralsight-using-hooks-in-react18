"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { useState, useTransition } from "react";

import SpeakerList from "@/app/components/speaker-list";

export const CONFERENCE_TITLE_TRANSITION = "conference-title-transition";

function SubTitle() {
  return (
    <h2 className="display-4 text-warning fw-light fst-italic">
      Silicon Valley Code Camp Speakers
    </h2>
  );
}

export default function Home() {
  const [showItem, setShowItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [speakersLoaded, setSpeakersLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleEnterClick() {
    console.log("clicked");
    setIsLoading(true);
    setSpeakersLoaded(false);

    startTransition(() => {
      setShowItem(true);
    });
  }

  function handleExitClick() {
    startTransition(() => {
      setShowItem(false);
      setIsLoading(false);
      setSpeakersLoaded(false);
    });
  }

  function handleSpeakersLoaded() {
    setSpeakersLoaded(true);
    setIsLoading(false);
  }

  return (
    <>
      {showItem && speakersLoaded && (
        <ViewTransition default="slide-from-bottom-complete">
          <SpeakerList
            isPending={isPending}
            onExit={handleExitClick}
            onSpeakersLoaded={handleSpeakersLoaded}
            isHidden={false}
          />
        </ViewTransition>
      )}

      {showItem && !speakersLoaded && (
        <SpeakerList
          isPending={isPending}
          onExit={handleExitClick}
          onSpeakersLoaded={handleSpeakersLoaded}
          isHidden={true}
        />
      )}

      {(!showItem || (showItem && !speakersLoaded)) && (
        <ViewTransition default={showItem && !speakersLoaded ? "slide-up" : ""}>
          <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
            <div className="text-center">
              <h1 className="display-1 fw-bold text-primary mb-4">
                Learn React&apos;s ViewTransition
              </h1>
              <SubTitle />

              <div className="mt-5">
                <button
                  onClick={handleEnterClick}
                  disabled={isLoading}
                  className="btn btn-primary btn-lg px-5 py-3 fw-bold text-uppercase rounded-pill shadow-lg"
                >
                  {isLoading ? "Loading..." : "Enter"}
                </button>
              </div>

              <p className="text-muted mt-4 fs-6">
                Click to view the speaker list
              </p>
            </div>

            {isLoading && (
              <div className="position-fixed bottom-0 start-0 end-0 bg-primary text-white py-3">
                <div className="container text-center">
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className="fw-medium">Loading speakers...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ViewTransition>
      )}
    </>
  );
}