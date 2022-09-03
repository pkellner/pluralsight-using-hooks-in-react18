export default function NotesModalFooter() {
  return (
    <div className="modal-footer justify-content-center">
      {modalSpeakerId !== 0 && (
        <button
          onClick={() => {
            //
          }}
          className="float-left btn btn-accent"
        >
          Save
        </button>
      )}

      <button
        className="btn btn-danger"
        onClick={() => {
          //
        }}
        data-dismiss="modal"
      >
        Discard
      </button>
    </div>
  );
}
