import { useContext } from "react";
import { SpeakerModalContext } from "../../contexts/SpeakerModalContext";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";

export default function NotesModalFooter() {
  const {
    setModalShow,
    modalSpeakerId,
    modalSpeakerFirstName,
    modalSpeakerLastName,
    modalSpeakerImageUrl,
  } = useContext(SpeakerModalContext);

  const {
    data,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus,
  } = useContext(SpeakersDataContext);

  return (
    <div className="modal-footer">
      {modalSpeakerId !== 0 && (
        <button
          onClick={() => {
            updateSpeaker({
              id: modalSpeakerId,
              firstName: modalSpeakerFirstName,
              lastName: modalSpeakerLastName,
              imageUrl: modalSpeakerImageUrl,
            });
            setModalShow(false);
          }}
          className="float-left btn btn-success"
        >
          Save
        </button>
      )}

      <button
        className="btn btn-danger"
        onClick={() => {
          setModalShow(false);
        }}
        data-dismiss="modal"
      >
        Discard
      </button>

      {modalSpeakerId === 0 && (
        <button
          className="btn btn-info"
          onClick={() => {
            createSpeaker({
              firstName: modalSpeakerFirstName,
              lastName: modalSpeakerLastName,
              imageUrl: modalSpeakerImageUrl,
              sat: true,
              sun: true,
              favorite: false,
              company: "Code Camp",
              twitterHandle: "unknown",
              userBioShort: "Dummy Bio",
            });
            setModalShow(false);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}
