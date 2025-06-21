import SpeakerDetailRecord from "./SpeakerDetailRecord";
import { startTransition, useState } from "react";
import {
  useViewTransitionCarousel,
  ViewTransitionCarouselProvider,
} from "./ViewTransitionCarouselProvider";

function SpeakerCarouselInner({
  speakers,
  setSpeakers,
  currentSlide,
  setCurrentSlide,
  setSlideDirection,
}) {
  const { slideDirection, isAnimating, previousSlideIndex } =
    useViewTransitionCarousel();
  const [slideDir, setSlideDir] = useState(null);

  const topSpeakers = speakers.filter((s) =>
    [1269, 187, 1124, 10803, 8367].includes(s.id),
  );

  function handlePrevious() {
    if (currentSlide > 0 && !isAnimating) {
      const nextSlide = currentSlide - 1;
      setSlideDir("prev");
      startTransition(function () {
        setSlideDirection("prev");
        setCurrentSlide(nextSlide);
      });
    }
  }

  function handleNext() {
    if (currentSlide < topSpeakers.length - 1 && !isAnimating) {
      const nextSlide = currentSlide + 1;
      setSlideDir("next");
      startTransition(function () {
        setSlideDirection("next");
        setCurrentSlide(nextSlide);
      });
    }
  }

  function goToSlide(index) {
    if (!isAnimating && index !== currentSlide) {
      const direction = index > currentSlide ? "next" : "prev";
      setSlideDir(direction);
      startTransition(function () {
        setSlideDirection(direction);
        setCurrentSlide(index);
      });
    }
  }

  if (!topSpeakers.length) return null;
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === topSpeakers.length - 1;

  return (
    <div className="speakers-carousel-wrapper position-relative">
      <div className="carousel-container">
        <div className="carousel-slide-wrapper">
          <div className="carousel-slide-content">
            {/* Current slide */}
            <SpeakerDetailRecord
              speakerRec={topSpeakers[currentSlide]}
              setSpeakers={setSpeakers}
              slideDir={slideDir}
              animationClass={
                isAnimating && slideDirection === "next"
                  ? "slide-in-right"
                  : isAnimating && slideDirection === "prev"
                  ? "slide-in-left"
                  : ""
              }
            />

            {/* Previous slide during animation */}
            {isAnimating && previousSlideIndex !== null && (
              <SpeakerDetailRecord
                speakerRec={topSpeakers[previousSlideIndex]}
                setSpeakers={setSpeakers}
                slideDir={slideDir}
                animationClass={
                  slideDirection === "next"
                    ? "slide-out-left"
                    : "slide-out-right"
                }
              />
            )}
          </div>
        </div>

        <button
          className={`carousel-nav-btn carousel-nav-prev ${
            isFirst ? "disabled" : ""
          }`}
          type="button"
          onClick={handlePrevious}
          disabled={isFirst || isAnimating}
        >
          <span className="carousel-nav-icon carousel-arrow-left" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className={`carousel-nav-btn carousel-nav-next ${
            isLast ? "disabled" : ""
          }`}
          type="button"
          onClick={handleNext}
          disabled={isLast || isAnimating}
        >
          <span className="carousel-nav-icon carousel-arrow-right" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="carousel-indicators-custom">
        {topSpeakers.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goToSlide(idx)}
            className={idx === currentSlide ? "active" : ""}
            aria-current={idx === currentSlide}
            aria-label={`Slide ${idx + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
}

export default function SpeakerCarousel({
  speakers,
  setSpeakers,
  currentSlide,
  setCurrentSlide,
}) {
  const [slideDirection, setSlideDirection] = useState(null);

  return (
    <ViewTransitionCarouselProvider
      currentSlideIndex={currentSlide}
      direction={slideDirection}
    >
      <SpeakerCarouselInner
        speakers={speakers}
        setSpeakers={setSpeakers}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        setSlideDirection={setSlideDirection}
      />
    </ViewTransitionCarouselProvider>
  );
}
