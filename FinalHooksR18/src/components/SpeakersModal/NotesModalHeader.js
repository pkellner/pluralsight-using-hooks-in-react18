import { NotesModalContext } from "../App";
import { useContext } from "react";

function NotesModalHeader() {
  const { setModalShow, modalNoteId } = useContext(NotesModalContext);
  return (
    <div className="modal-header bg-info text-white">
      <h5 className="modal-title text-white">
        {modalNoteId === 0 ? <span>Add Note</span> : <span>Edit Note</span>}
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

export default NotesModalHeader;
