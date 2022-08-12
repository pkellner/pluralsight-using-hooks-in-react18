import { NotesContext, NotesModalContext } from "../App";
import { useContext } from "react";

function NotesModalFooter() {
  const {
    modalNoteId,
    setModalShow,
    modalNoteTitle,
    modalNoteDescription,
    modalNoteTagIds,
    tagNamesNewValue,
  } = useContext(NotesModalContext);
  const { createNote, updateNote } = useContext(NotesContext);
  return (
    <div className="modal-footer">
      {modalNoteId !== 0 && (
        <button
          onClick={() => {
            updateNote(
              modalNoteId,
              modalNoteTitle,
              modalNoteDescription,
              undefined,
              undefined,
              modalNoteTagIds,
              tagNamesNewValue
            );
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

      {modalNoteId === 0 && (
        <button
          className="btn btn-info"
          onClick={() => {
            createNote(
              modalNoteTitle,
              modalNoteDescription,
              modalNoteTagIds,
              tagNamesNewValue
            );
            setModalShow(false);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default NotesModalFooter;
