import React from "react";

const SpeakerImageToggleOnScroll = ({ imageUrl, alt }) => {
 
  return (
    <img
      src={imageUrl}
      alt={alt}
      width="200"
      height="200"
      className="img-fluid rounded-start speaker-image"
    />
  );
};

export default SpeakerImageToggleOnScroll;
