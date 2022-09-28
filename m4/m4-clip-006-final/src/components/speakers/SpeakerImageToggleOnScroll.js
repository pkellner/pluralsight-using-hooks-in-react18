import { useEffect, useRef, useState } from "react";

export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail,
}) {
  const imageRef = useRef(null);
  //const [isLoading, setIsLoading] = useState(true);
  const isLoading = false;

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    //setIsLoading(false);

    // THIS SHOULD JUST BE THE SETINVIEW(...) CALL
    async function sleepTime() {
      await new Promise((r) => setTimeout(r, 2100));
      setInView(isInView());
    }
    sleepTime();

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";
  const gif1x1Transparent =
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
  return (
    <img
      src={isLoading ? gif1x1Transparent : imageUrl}
      alt={alt}
      ref={imageRef}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      className={
        thumbNail
          ? "img-fluid rounded-start "
          : "img-fluid rounded-start speaker-image"
      }
      style={{ filter: `${grayScale}` }}
    />
  );
}
