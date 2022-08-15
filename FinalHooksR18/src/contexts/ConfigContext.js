import React, { createContext } from "react";

export const ConfigContext = createContext({
  showSpeakerSpeakingDays: false, // just for typing
});

export const ConfigProvider = ({ children }) => {
  const value = {
    showSpeakerSpeakingDays: true,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};
