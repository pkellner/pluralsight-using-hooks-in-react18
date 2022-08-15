import React, { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../../contexts/MenuContext";

const SpeakerImageToggleOnScroll = ({ imageUrl, alt }) => {
  const imageRef = useRef(null);

  const { speakingSaturday, speakingSunday } = useContext(MenuContext);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [speakingSaturday, speakingSunday]);

  const scrollHandler = () => {
    setInView(isInView());
  };

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";

  return (
    <img
      style={{ filter: `${grayScale}` }}
      src={imageUrl}
      alt={alt}
      ref={imageRef}
      width="200"
      height="200"
    />
  );
};

export default SpeakerImageToggleOnScroll;
