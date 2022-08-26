

function SpeakersModalHeader() {
  return (
    <div className="modal-header bg-main-gradient text-white">
      <h5 className="modal-title">
        {1 === 0 ? (
          <span>Add Speaker</span>
        ) : (
          <span>Edit Speaker</span>
        )}
      </h5>
      <button
        type="button"
        onClick={() => {}}
        className="btn btn-sm text-dark"
        data-dismiss="modal"
        area-label="close"
      >
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}

export default SpeakersModalHeader;
