import { createContext, useContext, useEffect, useRef, useState } from "react";

const ViewTransitionCarouselContext = createContext(undefined);

export function ViewTransitionCarouselProvider({
  children,
  currentSlideIndex,
  direction,
}) {
  const [slideDirection, setSlideDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousSlideIndex, setPreviousSlideIndex] = useState(null);
  const lastSlideIndexRef = useRef(currentSlideIndex);
  const timeoutRef = useRef(null);

  useEffect(
    function () {
      if (
        currentSlideIndex !== lastSlideIndexRef.current &&
        direction &&
        !isAnimating
      ) {
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        setIsAnimating(true);
        setSlideDirection(direction);
        setPreviousSlideIndex(lastSlideIndexRef.current);
        lastSlideIndexRef.current = currentSlideIndex;

        timeoutRef.current = setTimeout(function () {
          setSlideDirection(null);
          setIsAnimating(false);
          setPreviousSlideIndex(null);
          timeoutRef.current = null;
        }, 800);
      }
    },
    [currentSlideIndex, direction, isAnimating],
  );

  // Cleanup timeout on unmount
  useEffect(function () {
    return function () {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const contextValue = {
    slideDirection,
    isAnimating,
    previousSlideIndex,
  };

  return (
    <ViewTransitionCarouselContext.Provider value={contextValue}>
      {children}
    </ViewTransitionCarouselContext.Provider>
  );
}

export function useViewTransitionCarousel() {
  const context = useContext(ViewTransitionCarouselContext);
  if (context === undefined) {
    throw new Error(
      "useViewTransitionCarousel must be used within a ViewTransitionCarouselProvider",
    );
  }
  return context;
}
