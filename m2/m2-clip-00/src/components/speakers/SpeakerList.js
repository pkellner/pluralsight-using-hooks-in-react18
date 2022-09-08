import SpeakerLine from "./SpeakerLine";
import { speakerList } from "../../../speakersData";

function List({ speakers, updateSpeaker }) {
  const updatingId = 0; // 1269;

  function toggleFavoriteSpeaker(speakerRec) {
    const speakerRecUpdated = { ...speakerRec, favorite: !speakerRec.favorite };
    updateSpeaker(speakerRecUpdated);
  }

  return (
    <div className="container">
      <div className="row g-3">
        {speakers.map((speakerRec) => (
          <SpeakerLine
            key={speakerRec.id}
            speakerRec={speakerRec}
            updating={updatingId === speakerRec.id ? updatingId : 0}
            toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec)}
          />
        ))}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const { darkTheme } = { darkTheme: false };

  const speakers = speakerList;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List speakers={speakers} updateSpeaker={() => {}} />
    </div>
  );
};

export default SpeakerList;
