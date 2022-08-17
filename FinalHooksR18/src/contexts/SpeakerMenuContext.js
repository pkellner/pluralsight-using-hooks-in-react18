import React, { createContext, useState } from "react";

export const SpeakerMenuContext = createContext({
  updating: true,
  setUpdating: () => {},
  speakingSaturday: true,
  setSpeakingSaturday: () => {},
  speakingSunday: true,
  setSpeakingSunday: () => {},
});

export const SpeakerMenuProvider = ({ children }) => {
  const [updating, setUpdating] = useState(false);
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const value = {
    updating,
    setUpdating,
    speakingSaturday,
    setSpeakingSaturday,
    speakingSunday,
    setSpeakingSunday,
  };

  return <SpeakerMenuContext.Provider value={value}>{children}</SpeakerMenuContext.Provider>;
};
