import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import { useContext, useState } from "react";

export default function FavoriteSpeakerToggle({speakerRec}) {
  const { updateSpeaker } = useContext(SpeakersDataContext);
  const [updating, setUpdating] = useState(false);

  return (
    <button
      className={speakerRec.favorite ? "heartredbutton" : "heartdarkbutton"}
      onClick={(e) => {
        e.preventDefault();
        const newSpeakerRec = {
          ...speakerRec,
          favorite: !speakerRec.favorite,
        };
        setUpdating(true);
        updateSpeaker(newSpeakerRec, () => {
          setUpdating(false);
        });
      }}
    >
      {updating ? <i className="spinner-border text-secondary" /> : null}
    </button>
  );
}
