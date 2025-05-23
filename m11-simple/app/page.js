"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { useState, useTransition } from "react";

import SpeakerList from "@/app/components/speaker-list";

export const CONFERENCE_TITLE_TRANSITION = "conference-title-transition";

function SubTitle() {
  return (
    <ViewTransition name={CONFERENCE_TITLE_TRANSITION} default="slow-fade">
      <h2 className="display-4 text-warning fw-light fst-italic">
        Silicon Valley Code Camp Speakers
      </h2>
    </ViewTransition>
  );
}

export default function Home() {
  const [showItem, setShowItem] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleEnterClick() {
    console.log("clicked");
    startTransition(() => {
      setShowItem((prev) => !prev);
    });
  }

  return (
    <>
      {showItem && (
        <ViewTransition default="slow-fade">
          <SpeakerList isPending={isPending} />
        </ViewTransition>
      )}

      {!showItem && (
        <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
          <div className="text-center">
            <h1 className="display-1 fw-bold text-primary mb-4">
              Learn React&apos;s ViewTransition
            </h1>
            <SubTitle />

            <div className="mt-5">
              <button
                onClick={handleEnterClick}
                className="btn btn-primary btn-lg px-5 py-3 fw-bold text-uppercase rounded-pill shadow-lg"
              >
                Enter
              </button>
            </div>

            <p className="text-muted mt-4 fs-6">
              Click to view the speaker list
            </p>
          </div>
        </div>
      )}
    </>
  );
}