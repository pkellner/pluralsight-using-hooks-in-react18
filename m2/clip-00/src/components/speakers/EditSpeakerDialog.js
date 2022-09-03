export default function EditSpeakerDialog({
  id,
  firstName,
  lastName,
  email,
  imageUrl,
}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "/speakerpopup";
      }}
      className="btn btn-accent btn-sm"
    >
      <i className="fa fa-edit"></i>
      {" Edit "}
    </button>
  );
}
