import SpeakerModal from "../speakerModal/SpeakerModal";

export default function AddSpeakerDialog() {
  const {
    setModalShow,
    setModalSpeakerId,
    setModalSpeakerFirstName,
    setModalSpeakerLastName,
    setModalSpeakerEmail,
    setModalSpeakerImageUrl,
  } = {
    setModalShow: (show) => {
      if (show === true) {
        window.location.href = "/speakerpopup";
      }
    },
    setModalSpeakerId: () => {},
    setModalSpeakerFirstName: () => {},
    setModalSpeakerLastName: () => {},
    setModalSpeakerEmail: () => {},
    setModalSpeakerImageUrl: () => {},
  };

  return (
    <>
      <SpeakerModal modalShow={false} />
      <button
        onClick={() => {
          setModalSpeakerId(0);
          setModalSpeakerFirstName("");
          setModalSpeakerLastName("");
          setModalSpeakerEmail("");
          setModalSpeakerImageUrl("/images/Speaker-New.jpg");
          setModalShow(true);
        }}
        className="btn btn-accent"
      >
        Add Speaker <i className="fa fa-plus" />
      </button>
    </>
  );
}
