import SpeakerModal from "../speakerModal/SpeakerModal";

export default function AddSpeakerDialog() {
  const {
    setModalShow,
    setModalSpeakerId,
    setModalSpeakerImageUrl,
  } = {
    setModalShow: (show) => {
      if (show === true) {
        window.location.href = "/speakerpopup";
      }
    },
    setModalSpeakerId: () => {},
    setModalSpeakerImageUrl: () => {}
  }
  
  return (
    <>
      <SpeakerModal modalShow={false}  />
      <button
        onClick={() => {
          setModalSpeakerId(0);
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
