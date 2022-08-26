import { useContext } from "react";

export default function NotesModalFooter() {
  return (
    <div className="modal-footer justify-content-center">
      <button onClick={() => {}} className="float-left btn btn-accent">
        Save
      </button>
      
      <button
        className="btn btn-danger"
        onClick={() => {
          window.location.href = "/";
        }}
        data-dismiss="modal"
      >
        Discard
      </button>
      <button className="btn btn-accent" onClick={() => {}}>
        Add
      </button>
      
    </div>
  );
}
