import { useContext } from "react";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";

export default function DeleteSpeakerButton({ id }) {
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
      className="btn btn-danger btn-sm"
    >
      <i className="fa fa-trash"></i>
      {" Delete "}
    </button>
  );
}
