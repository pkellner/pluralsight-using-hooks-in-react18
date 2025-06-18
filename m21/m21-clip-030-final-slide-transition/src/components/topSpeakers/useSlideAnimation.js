import { useState } from "react";

export default function useSlideAnimation() {
  const [slideDirection, setSlideDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousSlideIndex, setPreviousSlideIndex] = useState(null);

  function triggerSlide(direction, currentIndex, nextIndex) {
    if (isAnimating) return;

    setIsAnimating(true);
    setSlideDirection(direction);
    setPreviousSlideIndex(currentIndex);

    // Reset animation after duration
    const timer = setTimeout(function () {
      setSlideDirection(null);
      setIsAnimating(false);
      setPreviousSlideIndex(null);
    }, 800); // Match your CSS animation duration

    return function () {
      clearTimeout(timer);
    };
  }

  return {
    slideDirection,
    isAnimating,
    previousSlideIndex,
    triggerSlide,
  };
}
