import React, {
  useState,
  startTransition,
  unstable_ViewTransition as ViewTransition,
} from "react";
import SpeakerListWithMenu from "./speaker-list-with-menu";
import SpeakerDetail from "@/app/components/speaker-detail";
import SubTitle from "@/app/components/sub-title";

export default function SpeakerList({
  speakers,
  setSpeakers,
  onExit,
  slideDirection,
}) {
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(null);

  async function handleSpeakerClick(speakerId) {
    startTransition(async () => {
      try {
        // For now, find the speaker in the existing data
        setSelectedSpeakerId(speakerId);
      } catch (error) {
        console.error("Error loading speaker details:", error);
      }
    });
  }

  function handleBackClick() {
    setSelectedSpeakerId(null);
  }

  const speakerData = selectedSpeakerId
    ? speakers.find((speaker) => speaker.id === selectedSpeakerId)
    : null;

  const vtEnter = slideDirection === "right" ? "slide-in" : "slide-out";
  const vtExit = slideDirection === "left" ? "slide-out" : "slide-in";

  if (selectedSpeakerId) {
    return (
      <ViewTransition enter={vtEnter} exit={vtExit}>
        <SpeakerDetail
          speakerData={speakerData}
          onBackClick={handleBackClick}
        />
      </ViewTransition>
    );
  }

  return (
    <ViewTransition enter={vtEnter} exit={vtExit}>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-5">
              <SubTitle />
            </div>

            <SpeakerListWithMenu
              speakers={speakers}
              onSpeakerClick={handleSpeakerClick}
              onExit={onExit}
              selectedSpeakerId={selectedSpeakerId}
            />
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}
