"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { useState, useTransition } from "react";

import SpeakerList from "@/app/components/speaker-list";

function SubTitle() {
  return (
    <h2 className="display-4 text-warning fw-light fst-italic">
      Silicon Valley Code Camp Speakers
    </h2>
  );
}

export default function HomeEnterPage({ onEnter, isLoading, slideDirection }) {
  const vtEnter = slideDirection === "right" ? "slide-in" : "slide-out";
  const vtExit = slideDirection === "left" ? "slide-out" : "slide-in";

  return (
    <ViewTransition enter={vtEnter} exit={vtExit}>
      <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-primary mb-4">
            Learn React&apos;s ViewTransition
          </h1>
          <SubTitle />

          <div className="mt-5">
            <button
              onClick={onEnter}
              disabled={isLoading}
              className="btn btn-primary btn-lg px-5 py-3 fw-bold text-uppercase rounded-pill shadow-lg"
            >
              {isLoading ? "Loading..." : "Enter"}
            </button>
          </div>

          <p className="text-muted mt-4 fs-6">Click to view the speaker list</p>
        </div>
      </div>
    </ViewTransition>
  );
}
