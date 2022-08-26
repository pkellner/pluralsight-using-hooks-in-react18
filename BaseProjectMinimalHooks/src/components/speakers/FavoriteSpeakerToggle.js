import {useState} from "react";

export default function FavoriteSpeakerToggle({ speakerRec }) {

  return (
    <button
      className={
        speakerRec.favorite
          ? "heartredbutton btn"
          : "heartdarkbutton btn"
      }
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <i className="spinner-border text-dark" role="status" />
    </button>
  );
}
