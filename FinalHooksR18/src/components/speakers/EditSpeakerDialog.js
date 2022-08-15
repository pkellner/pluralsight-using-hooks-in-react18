import React, { useContext } from "react";

import { SpeakerModalContext } from "../../contexts/SpeakerModalContext";

export default function EditSpeakerDialog({
  id,
  firstName,
  lastName,
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
    modalSpeakerImageUrl,
    setModalSpeakerImageUrl,
  } = useContext(SpeakerModalContext);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        // setModalSpeakerId(speakerRec.id);
        //
        // setModalSpeakerFirstName(speakerRec.firstName);
        // setModalSpeakerLastName(speakerRec.lastName);
        // setModalSpeakerImageUrl(speakerRec.imageUrl);

        setModalSpeakerId(id);

        setModalSpeakerFirstName(firstName);
        setModalSpeakerLastName(lastName);
        setModalSpeakerImageUrl(imageUrl);

        setModalShow(true);
      }}
    >
      Edit Speaker <i className="fa fa-edit"></i>{" "}
    </button>
  );
}
