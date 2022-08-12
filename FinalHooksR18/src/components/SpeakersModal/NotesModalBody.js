import { NotesModalContext } from "../App";
import { useContext } from "react";

function NotesModalBody() {
  const {
    modalNoteTitle,
    setModalNoteTitle,
    modalNoteDescription,
    setModalNoteDescription,
  } = useContext(NotesModalContext);
  return (
    <div className="modal-body">
      <div className="notes-box">
        <div className="notes-content">
          <form>
            <div className="row">
              <div className="col-md-12">
                <div className="note-title">
                  <label>Note Title</label>
                  <input
                    value={modalNoteTitle}
                    onChange={(event) => {
                      setModalNoteTitle(event.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <label>Note Description</label>
                <textarea
                  value={modalNoteDescription}
                  onChange={(event) => {
                    setModalNoteDescription(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Description"
                  rows={3}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NotesModalBody;
