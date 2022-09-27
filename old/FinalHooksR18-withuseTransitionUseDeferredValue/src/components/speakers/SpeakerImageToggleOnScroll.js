import React, {useContext, useEffect, useRef, useState} from "react";
import {SpeakerMenuContext} from "../../contexts/SpeakerMenuContext";

const SpeakerImageToggleOnScroll = ({ imageUrl, alt }) => {
  const imageRef = useRef(null);
  const { speakingSaturday, speakingSunday, searchText } =
    useContext(SpeakerMenuContext);

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
  }, [speakingSaturday, speakingSunday, searchText]);

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
      className="img-fluid rounded-start speaker-image"
    />
  );
};

export default SpeakerImageToggleOnScroll;
