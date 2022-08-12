import { useContext } from "react";
import { SpeakerModalContext } from "../../contexts/SpeakerModalContext";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";

export default function NotesModalFooter() {
  const {
    setModalShow,
    modalShow,
    modalSpeakerId,
    modalSpeakerFirstName,
    setModalSpeakerFirstName,
    modalSpeakerLastName,
    setModalSpeakerLastName,
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
            // createSpeaker(
            //
            // );
            setModalShow(false);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}
