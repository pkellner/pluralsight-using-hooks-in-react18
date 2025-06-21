import { useState } from "react";

export default function FavoriteSpeakerUpdate({
  speakerRec,
  completionFunction,
}) {
  async function updateSpeaker(speaker, callback) {
    try {
      const response = await fetch(`/api/speakers/${speaker.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(speaker),
      });
      const data = await response.json();
      callback(data);
    } catch (error) {
      console.error("Error updating speaker:", error);
    }
  }

  const [updating, setUpdating] = useState(false);
  return (
    <button
      className={
        speakerRec.favorite ? "heartredbutton btn" : "heartdarkbutton btn"
      }
      onClick={(e) => {
        e.preventDefault();
        const newSpeakerRec = {
          ...speakerRec,
          favorite: !speakerRec.favorite,
        };
        setUpdating(true);
        updateSpeaker(newSpeakerRec, () => {
          setUpdating(false);
          if (completionFunction) {
            completionFunction(newSpeakerRec);
          }
        });
      }}
    >
      {updating ? (
        <i className="spinner-border text-dark" role="status" />
      ) : null}
    </button>
  );
}
