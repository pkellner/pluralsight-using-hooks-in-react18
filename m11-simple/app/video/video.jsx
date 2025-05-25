"use client";

import { unstable_ViewTransition as ViewTransition } from "react";
import SpeakerImage from "@/app/components/speaker-image";

const THUMBNAIL_NAME = "video-thumbnail";

export function Thumbnail({ video, children }) {
  return (
    <ViewTransition name={THUMBNAIL_NAME}>
      <div>
        <SpeakerImage
          id={1124}
          imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100"
          alt={video.title}
          isLarge={false}
        />
      </div>
    </ViewTransition>
  );
}

export function Video({ video, onClick }) {
  return (
    <div className="video">
      <div className="link" onClick={onClick}>
        <Thumbnail video={video} />
        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}

export function FullscreenVideo({ video, onExit }) {
  return (
    <div className="fullscreenLayout">
      <ViewTransition name={THUMBNAIL_NAME}>
        <SpeakerImage
          id={1124}
          imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
          alt={video.title}
          isLarge={true}
        />
        <button className="close-button" onClick={onExit}>
          ✖
        </button>
      </ViewTransition>
    </div>
  );
}
