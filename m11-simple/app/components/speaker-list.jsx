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
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [loadingSpeakerId, setLoadingSpeakerId] = useState(null);

  async function handleSpeakerClick(speakerId) {
    setLoadingSpeakerId(speakerId);

    startTransition(async () => {
      try {
        // const response = await fetch(`/api/speakers/${speakerId}`);
        // const speakerData = await response.json();

        // For now, find the speaker in the existing data
        const speakerData = speakers.find(speaker => speaker.id === speakerId);

        // Force 1 second delay to demonstrate loading state
        await new Promise((resolve) => setTimeout(resolve, 3000));

        setSelectedSpeaker(speakerData);
      } catch (error) {
        console.error("Error loading speaker details:", error);
      } finally {
        setLoadingSpeakerId(null);
      }
    });
  }

  function handleBackClick() {
    setSelectedSpeaker(null);
  }

  const vtEnter = slideDirection === "right" ? "slide-in" : "slide-out";
  const vtExit = slideDirection === "left" ? "slide-out" : "slide-in";

  if (selectedSpeaker) {
    return (
      <ViewTransition enter={vtEnter} exit={vtExit}>
        <SpeakerDetail speaker={selectedSpeaker} onBackClick={handleBackClick} />
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
              loadingSpeakerId={loadingSpeakerId}
            />
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}