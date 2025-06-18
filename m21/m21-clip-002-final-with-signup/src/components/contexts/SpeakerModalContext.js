import React, { createContext } from "react";
import useSpeakerModal from "../hooks/useSpeakerModal";

export const SpeakerModalContext = createContext({
  modalShow: false,
  setModalShow: () => {},
  modalSpeakerId: 0,
  setModalSpeakerId: () => {},
  modalSpeakerFirstName: "",
  setModalSpeakerFirstName: () => {},
  modalSpeakerLastName: "",
  setModalSpeakerLastName: () => {},
  modalSpeakerImageUrl: "",
  setModalSpeakerImageUrl: () => {},
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
    modalSpeakerEmail,
    setModalSpeakerEmail,
    modalSpeakerImageUrl,
    setModalSpeakerImageUrl,
  } = useSpeakerModal();

  const value = {
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

  return (
    <SpeakerModalContext.Provider value={value}>
      {children}
    </SpeakerModalContext.Provider>
  );
};
