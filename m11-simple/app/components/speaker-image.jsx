import React, { unstable_ViewTransition as ViewTransition } from "react";

export default function SpeakerImage({
  speakerId,
  imageUrl,
  alt,
  isLarge = false,
}) {
  const sizeClass = isLarge ? "speaker-image-large" : "speaker-image-thumb";

  // return (
  //   <ViewTransition name={`SPEAKER_IMAGE_${speakerId}`}>
  //     <div className={`speaker-image-container ${sizeClass}`}>
  //       <img
  //         src={imageUrl}
  //         alt={alt}
  //       />
  //     </div>
  //   </ViewTransition>
  // );

  return (
    <ViewTransition name={`SPEAKER_IMAGE_${speakerId}`}>
      <div className={`speaker-image-container  ${sizeClass}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={alt}
            className={`img-fluid rounded  ${sizeClass}`}
          />
        ) : (
          <div className={`img-fluid rounded  ${sizeClass}`}>
            <i className="bi bi-person-fill fs-1"></i>
          </div>
        )}
      </div>
    </ViewTransition>
  );
}
