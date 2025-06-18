import { useState, useEffect } from "react";

export default function useSlideAnimation() {
  const [animationClass, setAnimationClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  function triggerSlide(direction) {
    if (isAnimating) return;

    setIsAnimating(true);

    // Apply the appropriate slide class based on direction
    if (direction === "next") {
      setAnimationClass("slide-out-left");
    } else if (direction === "prev") {
      setAnimationClass("slide-out-right");
    }
  }

  useEffect(
    function () {
      if (animationClass) {
        const timer = setTimeout(function () {
          // After the slide out animation, slide in from the opposite direction
          if (animationClass === "slide-out-left") {
            setAnimationClass("slide-in-right");
          } else if (animationClass === "slide-out-right") {
            setAnimationClass("slide-in-left");
          }

          // Reset animation state after slide in completes
          const resetTimer = setTimeout(function () {
            setAnimationClass("");
            setIsAnimating(false);
          }, 300); // Match your CSS animation duration

          return function () {
            clearTimeout(resetTimer);
          };
        }, 300); // Match your CSS animation duration

        return function () {
          clearTimeout(timer);
        };
      }
    },
    [animationClass],
  );

  return {
    animationClass,
    isAnimating,
    triggerSlide,
  };
}
