import React, { startTransition, useDeferredValue, useState } from "react";
import SpeakerDetail from "@/app/components/speaker-detail";
import SpeakerListItem from "@/app/speaker-list-item";

function SpeakerMenu({
  speakingSaturday,
  setSpeakingSaturday,
  speakingSunday,
  setSpeakingSunday,
  onExit,
}) {
  return (
    <div className="row justify-content-between align-items-center mb-4">
      <div className="col-auto">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Speaker toolbar filter"
        >
          <div className="toolbar-trigger d-flex gap-4 align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="saturday-filter"
                onChange={() => {
                  startTransition(() => {
                    setSpeakingSaturday(!speakingSaturday);
                  });
                }}
                checked={speakingSaturday}
              />
              <label
                className="form-check-label fw-medium"
                htmlFor="saturday-filter"
              >
                Saturday Speakers
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="sunday-filter"
                onChange={() => {
                  startTransition(() => {
                    setSpeakingSunday(!speakingSunday);
                  });
                }}
                checked={speakingSunday}
              />
              <label
                className="form-check-label fw-medium"
                htmlFor="sunday-filter"
              >
                Sunday Speakers
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-auto">
        <button
          onClick={onExit}
          className="btn btn-accent btn-sm d-flex align-items-center gap-2 px-3 py-2"
        >
          <i className="bi bi-arrow-left"></i>
          <span>Exit</span>
        </button>
      </div>
    </div>
  );
}

export default function SpeakerListWithMenu({
  speakers,
  onSpeakerClick,
  onExit,
  selectedSpeakerId,
}) {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const deferredSpeakingSaturday = useDeferredValue(speakingSaturday);
  const deferredSpeakingSunday = useDeferredValue(speakingSunday);

  const filteredSpeakers = speakers.filter((speaker) => {
    if (deferredSpeakingSaturday && deferredSpeakingSunday) {
      return speaker.sat || speaker.sun;
    }
    if (deferredSpeakingSaturday) {
      return speaker.sat;
    }
    if (deferredSpeakingSunday) {
      return speaker.sun;
    }
    return false;
  });

  return (
    <>
      {!selectedSpeakerId && (
        <div>
          <SpeakerMenu
            speakingSaturday={speakingSaturday}
            setSpeakingSaturday={setSpeakingSaturday}
            speakingSunday={speakingSunday}
            setSpeakingSunday={setSpeakingSunday}
            onExit={onExit}
          />

          <div className="row g-4">
            {filteredSpeakers.map((speaker) => (
              <SpeakerListItem
                key={speaker.id}
                speaker={speaker}
                onSpeakerClick={onSpeakerClick}
              />
            ))}
          </div>
        </div>
      )}

      {selectedSpeakerId && (
        <SpeakerDetail speaker={selectedSpeaker} onBackClick={onExit} />
      )}
    </>
  );
}
