import React, { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import { ConfigContext } from "../../contexts/ConfigContext";
import AddSpeakerDialog from "../speakers/AddSpeakerDialog";
import { SpeakerModalProvider } from "../../contexts/SpeakerModalContext";

export default function Menu() {
  const {
    speakingSaturday,
    setSpeakingSaturday,
    speakingSunday,
    setSpeakingSunday,
  } = useContext(MenuContext);

  const { showSpeakerSpeakingDays } = useContext(ConfigContext);

  return (
    <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
      {showSpeakerSpeakingDays === false ? null : (
        <div className="hide">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => {
                  setSpeakingSaturday(!speakingSaturday);
                }}
                checked={speakingSaturday}
              />
              Saturday Speakers
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => {
                  setSpeakingSunday(!speakingSunday);
                }}
                checked={speakingSunday}
              />
              Sunday Speakers
            </label>
          </div>
          <div className="form-check-inline">
            <SpeakerModalProvider>
              <AddSpeakerDialog />
            </SpeakerModalProvider>
          </div>
        </div>
      )}
      <br />
      <br />
    </div>
  );
}
