import React, { useContext } from "react";
import { SpeakerModalContext } from "../../contexts/SpeakerModalContext";
import SpeakerModal from "../speakerModal/SpeakerModal";

export default function AddSpeakerDialog() {
  const {
    setModalShow,
    setModalSpeakerId,
    setModalSpeakerImageUrl,
  } = useContext(SpeakerModalContext);

  return (
    <>
      <SpeakerModal />
      <button
        onClick={() => {
          setModalSpeakerId(0);
          setModalSpeakerImageUrl("/images/Speaker-New.jpg");
          setModalShow(true);
        }}
      >
        Add Speaker <i className="fa fa-plus" />
      </button>
    </>
  );
}
