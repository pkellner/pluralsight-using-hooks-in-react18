"use client";
import { Suspense, useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SpeakerCarousel from "./SpeakerCarousel";

export default function TopSpeakers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { darkTheme } = useContext(ThemeContext);

  return (
    <Suspense fallback={<div>Loading Speaker Carousel...</div>}>
      <div className={darkTheme ? "theme-dark" : "theme-light"}>
        <SpeakerCarousel
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </Suspense>
  );
}
