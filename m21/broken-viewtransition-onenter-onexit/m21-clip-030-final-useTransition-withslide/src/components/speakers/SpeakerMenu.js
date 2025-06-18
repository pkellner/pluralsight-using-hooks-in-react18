import { useContext } from "react";
import AddSpeakerDialog from "./AddSpeakerDialog";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";
import { SpeakerModalProvider } from "../contexts/SpeakerModalContext";

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
    <div
      className="btn-toolbar"
      role="toolbar"
      aria-label="Speaker toolbar filter"
    >
      <div className="toolbar-trigger mb-3">
        <div className="toolbar-search">
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
    </div>
  );
}
