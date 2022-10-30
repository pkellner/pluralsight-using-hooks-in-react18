import { useState } from "react";

function useSpeakerModal() {
  const [modalShow, setModalShow] = useState(false);

  const [modalSpeakerId, setModalSpeakerId] = useState(0);
  const [modalSpeakerFirstName, setModalSpeakerFirstName] = useState("");
  const [modalSpeakerLastName, setModalSpeakerLastName] = useState("");
  const [modalSpeakerImageUrl, setModalSpeakerImageUrl] = useState("");
  const [modalSpeakerEmail, setModalSpeakerEmail] = useState("");

  return {
    modalShow,
    setModalShow,

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
  };
}

export default useSpeakerModal;
