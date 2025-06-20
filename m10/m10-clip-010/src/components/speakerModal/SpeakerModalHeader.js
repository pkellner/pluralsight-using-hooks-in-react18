import { useContext } from "react";
import { SpeakerModalContext } from "../contexts/SpeakerModalContext";

export default function SpeakersModalHeader() {
  const { setModalShow, modalSpeakerId } = useContext(SpeakerModalContext);
  return (
    <div className="modal-header bg-main-gradient text-white">
      <h5 className="modal-title">
        {modalSpeakerId === 0 ? (
          <span>Add Speaker</span>
        ) : (
          <span>Edit Speaker</span>
        )}
      </h5>
      <button
        type="button"
        onClick={() => {
          setModalShow(false);
        }}
        className="btn btn-sm text-dark"
        data-dismiss="modal"
        area-label="close"
      >
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}
