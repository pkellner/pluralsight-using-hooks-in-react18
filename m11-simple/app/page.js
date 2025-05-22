"use client";
import {unstable_ViewTransition as ViewTransition} from "react";
import { useState, startTransition } from "react";

import SpeakerList from "@/app/components/speaker-list";

export const CONFERENCE_TITLE = "conference-title";

function SubTitle() {
  return <ViewTransition name="XXX1"> <h2 className="display-4 text-secondary">
    Silicon Valley Code Camp Speakers
  </h2></ViewTransition>;
}

export default function Home() {
  const [showItem, setShowItem] = useState(false);

  return (
    <>
      {/*{showItem && <SpeakerList />}*/}

      {showItem && (
        <ViewTransition>
          <SpeakerList />
        </ViewTransition>
      )}

      {!showItem && (
        <div
          className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center"
          onClick={() => {
            console.log("clicked");
            startTransition(() => {
              setShowItem((prev) => !prev);
            });
          }}
        >
          <div className="text-center">
            <h1 className="display-1 fw-bold text-primary mb-4">
              Learn React&apos;s ViewTransition
            </h1>
            <SubTitle />
          </div>
        </div>
      )}
    </>
  );
}
