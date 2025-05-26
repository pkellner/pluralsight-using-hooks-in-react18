"use client";
import { startTransition, useState } from "react";

import SpeakerList from "@/app/components/speaker-list";
import HomeEnterPage from "@/app/components/home-enter-page";

export default function Home() {
  const [showItem, setShowItem] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  function onSwapPage() {
    startTransition(() => {
      setShowItem((prev) => !prev);
    });
  }

  return (
    <>
      {showItem ? (
        <SpeakerList
          speakers={speakers}
          onExit={onSwapPage}
          slideDirection={showItem ? "up" : "down"}
        />
      ) : null}
      {!showItem ? (
        <HomeEnterPage
          speakers={speakers}
          setSpeakers={setSpeakers}
          onEnter={onSwapPage}
          slideDirection={showItem ? "down" : "up"}
        />
      ) : null}
    </>
  );
}
