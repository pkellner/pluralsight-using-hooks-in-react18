import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  updating: true,
  setUpdating: () => {},
  speakingSaturday: true,
  setSpeakingSaturday: () => {},
  speakingSunday: true,
  setSpeakingSunday: () => {},
});

export const MenuProvider = ({ children }) => {
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

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
