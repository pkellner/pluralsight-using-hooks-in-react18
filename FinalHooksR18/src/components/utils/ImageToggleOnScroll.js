import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({
  imageUrl,
  alt,
  speakingSaturday,
  speakingSunday,
}) => {
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
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

export default ImageToggleOnScroll;
