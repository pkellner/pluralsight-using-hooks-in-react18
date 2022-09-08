import React from "react";
import AddSpeakerDialog from "./AddSpeakerDialog";

export default function SpeakerMenu() {
  return (
    <div
      className="btn-toolbar"
      role="toolbar"
      aria-label="Speaker toolbar filter"
    >
      <div className="hide toolbar-trigger mb-3">
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                //
              }}
              checked={true}
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
                //
              }}
              checked={true}
            />
            Sunday Speakers
          </label>
        </div>
        <div className="input-group">
          <AddSpeakerDialog />
        </div>
      </div>
    </div>
  );
}
