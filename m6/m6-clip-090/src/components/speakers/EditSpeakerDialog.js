export default function EditSpeakerDialog({
  id,
  firstName,
  lastName,
  email,
  imageUrl,
}) {
  const {
    setModalShow,
    modalShow,
    modalSpeakerId,
    setModalSpeakerId,
    modalSpeakerFirstName,
    setModalSpeakerFirstName,
    modalSpeakerLastName,
    setModalSpeakerLastName,
    modalSpeakerEmail,
    setModalSpeakerEmail,
    modalSpeakerImageUrl,
    setModalSpeakerImageUrl,
  } = {
    setModalShow: (show) => {
      if (show === true) {
        window.location.href = "/speakerpopup";
      }
    },
    modalShow: false,
    modalSpeakerId: id,
    setModalSpeakerId: () => {},
    modalSpeakerFirstName: firstName,
    setModalSpeakerFirstName: () => {},
    modalSpeakerLastName: lastName,
    setModalSpeakerLastName: () => {},
    modalSpeakerEmail: email,
    setModalSpeakerEmail: () => {},
    modalSpeakerImageUrl: imageUrl,
    setModalSpeakerImageUrl: () => {},
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setModalSpeakerId(id);
        setModalSpeakerFirstName(firstName);
        setModalSpeakerLastName(lastName);
        setModalSpeakerImageUrl(imageUrl);
        setModalSpeakerEmail(email);
        setModalShow(true);
      }}
      className="btn btn-accent btn-sm"
    >
      <i className="fa fa-edit"></i>
      {" Edit "}
    </button>
  );
}
