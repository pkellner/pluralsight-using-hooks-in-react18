import React, { createContext, useState } from "react";

export const SpeakerMenuContext = createContext({
  updating: true,
  setUpdating: () => {},
  speakingSaturday: true,
  setSpeakingSaturday: () => {},
  speakingSunday: true,
  setSpeakingSunday: () => {},
  searchText: "",
  setSearchText: () => {},
});

export const SpeakerMenuProvider = ({ children }) => {
  const [updating, setUpdating] = useState(false);
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [searchText, setSearchText] = useState("");

  const value = {
    updating,
    setUpdating,
    speakingSaturday,
    setSpeakingSaturday,
    speakingSunday,
    setSpeakingSunday,
    searchText,
    setSearchText,
  };

  return (
    <SpeakerMenuContext.Provider value={value}>
      {children}
    </SpeakerMenuContext.Provider>
  );
};
