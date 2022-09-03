import React from "react";

export default function SpeakerImageToggleOnScroll({ imageUrl, alt }) {
  return (
    <img
      src={imageUrl}
      alt={alt}
      width="200"
      height="200"
      className="img-fluid rounded-start speaker-image"
    />
  );
}
