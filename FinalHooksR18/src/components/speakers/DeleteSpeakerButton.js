import { useContext, useState } from "react";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";


export default function DeleteSpeakerButton({id}) {
  const { deleteSpeaker } = useContext(SpeakersDataContext);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        const confirmed = confirm(
          "Are you sure you want to delete this speaker?"
        );
        if (confirmed) {
          deleteSpeaker(id);
        }
      }}
    >
      Delete Speaker <i className="fa fa-trash"></i>{" "}
    </button>
  );
}
