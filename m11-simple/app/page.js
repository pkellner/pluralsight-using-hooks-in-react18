"use client";
import { unstable_ViewTransition as ViewTransition, useEffect } from "react";
import { useState, startTransition } from "react";

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
          slideDirection={showItem ? "right" : "left"}
        />
      ) : null}
      {!showItem ? (
        <HomeEnterPage
          speakers={speakers}
          setSpeakers={setSpeakers}
          onEnter={onSwapPage}
          slideDirection={showItem ? "right" : "left"}
        />
      ) : null}
    </>
  );
}
