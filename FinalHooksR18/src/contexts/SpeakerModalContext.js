import React, { createContext } from "react";
import useSpeakerModal from "../hooks/useSpeakerModal";

export const SpeakerModalContext = createContext({
  modalShow: false,
  setModalShow: () => {},
  modalSpeakerId: 0,
  setModalSpeakerId: () => {},
});

export const SpeakerModalProvider = ({ children }) => {
  const {
    modalShow,
    setModalShow,
    modalSpeakerId,
    setModalSpeakerId,
    modalSpeakerFirstName,
    setModalSpeakerFirstName,
    modalSpeakerLastName,
    setModalSpeakerLastName,
  } = useSpeakerModal();

  const provider = {
    modalShow,
    setModalShow,
    modalSpeakerId,
    setModalSpeakerId,
    modalSpeakerFirstName,
    setModalSpeakerFirstName,
    modalSpeakerLastName,
    setModalSpeakerLastName,
  };

  return (
    <SpeakerModalContext.Provider value={provider}>
      {children}
    </SpeakerModalContext.Provider>
  );
};
