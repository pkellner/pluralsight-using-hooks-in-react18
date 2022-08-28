import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import { useContext, useState, memo, useCallback } from "react";

const FavoriteSpeakerToggleLine = ({ speakerRec, setSpeakerRec, children }) => {
  const onClickFavorite = () => {
    const newSpeakerRec = {
      ...speakerRec,
      favorite: !speakerRec.favorite,
    };
    setSpeakerRec(newSpeakerRec);
  };

  return (
    <button
      className={
        speakerRec.favorite ? "heartredbutton btn" : "heartdarkbutton btn"
      }
      onClick={onClickFavorite}
    >
      {children}
    </button>
  );
};

export default FavoriteSpeakerToggleLine;
