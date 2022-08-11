import React from "react";
import Speakers from "./components/Speakers";

export const ConfigContext = React.createContext();

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <Speakers />
    </ConfigContext.Provider>
  );
};

export default App;
