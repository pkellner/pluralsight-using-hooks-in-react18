function NotesModalBody() {
  return (
    <div className="modal-body">
      <div className="notes-box">
        <div className="notes-content">
          <form>
            <div className="row">
              <div className="col-md-12">
                <div className="note-title">
                  <label>Speaker Id:</label>
                  <span>101</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="note-title">
                  <label>First Name</label>
                  <input
                    onChange={(event) => {}}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="note-title">
                  <label>Last Name</label>
                  <input
                    onChange={(event) => {}}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="note-title">
                  <label>Email</label>
                  <input
                    onChange={(event) => {}}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="note-title">
                  <label>Speaker Image URL:</label>
                  <input
                    onChange={(event) => {}}
                    type="text"
                    className="form-control"
                    placeholder="https://"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NotesModalBody;
