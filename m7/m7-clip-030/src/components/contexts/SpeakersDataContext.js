import React, { createContext } from "react";
import useSpeakersData from "../hooks/useSpeakersData";

export const SpeakersDataContext = createContext({
  speakerList: [],
  createSpeaker: () => {},
  updateSpeaker: () => {},
  deleteSpeaker: () => {},
  loadingStatus: "",
});

export const SpeakersDataProvider = ({ children }) => {
  const {
    speakerList,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus,
  } = useSpeakersData();

  const value = {
    speakerList,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus,
  };

  return (
    <SpeakersDataContext.Provider value={value}>
      {children}
    </SpeakersDataContext.Provider>
  );
};
