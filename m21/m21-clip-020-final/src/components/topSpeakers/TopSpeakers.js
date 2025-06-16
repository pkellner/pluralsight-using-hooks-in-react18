"use client";
import { Suspense, useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SpeakerCarousel from "./SpeakerCarousel";

export default function TopSpeakers() {
  const [currentSlide, setCurrentSlide] = useState(0); // Moved to parent

  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerCarousel
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}
