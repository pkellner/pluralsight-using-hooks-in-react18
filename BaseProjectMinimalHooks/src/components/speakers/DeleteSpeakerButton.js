export default function DeleteSpeakerButton({ id }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        const confirmed = confirm(
          "Are you sure you want to delete this speaker?"
        );
        if (confirmed) {
        
        }
      }}

      className="btn btn-danger btn-sm"
    >
      <i className="fa fa-trash"></i>{" Delete "}
    </button>
  );
}
