import { startTransition, useState } from "react";
import { FullscreenVideo, Video } from "./Video";
import videos from "./data";

export default function Go() {
  //return <div>go</div>
  const [fullscreen, setFullscreen] = useState(false);
  if (fullscreen) {
    return (
      <FullscreenVideo
        video={videos[0]}
        onExit={() => startTransition(() => setFullscreen(false))}
      />
    );
  }
  return (
    <Video
      video={videos[0]}
      onClick={() => startTransition(() => setFullscreen(true))}
    />
  );
}
