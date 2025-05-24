import React, { unstable_ViewTransition as ViewTransition } from "react";

export default function SpeakerImage({
  speakerId,
  imageUrl,
  alt,
  isLarge = false,
}) {
  const sizeClass = isLarge ? "speaker-image-large" : "speaker-image-thumb";

  return (
    <ViewTransition name={`SPEAKER_IMAGE_${speakerId}`}>
      <div className={`speaker-image-container ${sizeClass}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={alt}
            className={`img-fluid rounded ${sizeClass}`}
            style={{
              width: isLarge ? "200px" : "80px",
              height: isLarge ? "200px" : "80px",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            className="bg-primary d-flex align-items-center justify-content-center text-white rounded"
            style={{
              width: isLarge ? "200px" : "80px",
              height: isLarge ? "200px" : "80px",
            }}
          >
            <i className="bi bi-person-fill fs-1"></i>
          </div>
        )}
      </div>
    </ViewTransition>
  );
}
