"use client";
import { unstable_ViewTransition as ViewTransition, useEffect } from "react";
import { useState, useTransition } from "react";

import SpeakerList from "@/app/components/speaker-list";
import HomeEnterPage from "@/app/components/home-enter-page";

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
  const [isLoading, setIsLoading] = useState(true);
  const [speakers, setSpeakers] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function loadSpeakers() {
      try {
        const response = await fetch("/api/speakers");
        const data = await response.json();
        setSpeakers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading speakers:", error);
      }
    }
    loadSpeakers();
  }, []);

  function onEnter() {
    startTransition(() => {
      setShowItem((prev) => !prev);
    });
  }

  function onExit() {
    startTransition(() => {
      setShowItem((prev) => !prev);
    });
  }

  return (
    <>
      {showItem ? <SpeakerList speakers={speakers} onExit={onExit} /> : null}
      {!showItem ? (
        <HomeEnterPage
          isLoading={isLoading}
          onEnter={onEnter}
        />
      ) : null}
    </>
  );
}
