import React, { useContext } from "react";
import { SpeakerMenuContext } from "../../contexts/SpeakerMenuContext";
import AddSpeakerDialog from "./AddSpeakerDialog";
import { SpeakerModalProvider } from "../../contexts/SpeakerModalContext";

export default function SpeakerMenu() {
  const {
    speakingSaturday,
    setSpeakingSaturday,
    speakingSunday,
    setSpeakingSunday,
    searchText,
    setSearchText,
  } = useContext(SpeakerMenuContext);

  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Speaker toolbar filter">
    <div className="hide toolbar-trigger mb-3">
  
      <div className="note-title">
        <input
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
      
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
      <div className="input-group">
        <SpeakerModalProvider>
          <AddSpeakerDialog />
        </SpeakerModalProvider>
      </div>
    </div>

      {/* <div className="hide">
        
        
        <div className="form-check-inline">
          <SpeakerModalProvider>
            <AddSpeakerDialog />
          </SpeakerModalProvider>
        </div>
      </div> */}
    </div>
  );
}
