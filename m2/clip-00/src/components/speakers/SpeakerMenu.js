import AddSpeakerDialog from "./AddSpeakerDialog";

export default function SpeakerMenu() {
  return (
    <div
      className="btn-toolbar"
      role="toolbar"
      aria-label="Speaker toolbar filter"
    >
      <div className="toolbar-trigger mb-3">
        <div className="toolbar-search">
          <input
            value=""
            onChange={(event) => {
              //
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
                //
              }}
              checked
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
              checked
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
