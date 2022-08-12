import { useContext } from "react";
import { SpeakerModalContext } from "../../contexts/SpeakerModalContext";

function SpeakersModalHeader() {
  const { setModalShow, modalSpeakerId } = useContext(SpeakerModalContext);
  return (
    <div className="modal-header bg-info text-white">
      <h5 className="modal-title text-white">
        {modalSpeakerId === 0 ? <span>Add Speaker</span> : <span>Edit Note</span>}
      </h5>
      <button
        type="button"
        onClick={() => {
          setModalShow(false);
        }}
        className="close text-white"
        data-dismiss="modal"
        area-label="close"
      >
        <span aria-hidden="true">x</span>
      </button>
    </div>
  );
}

export default SpeakersModalHeader;
