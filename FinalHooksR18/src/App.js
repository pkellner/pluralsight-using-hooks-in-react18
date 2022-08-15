import React from "react";
import Speakers from "./components/speakers/Speakers";
import { SpeakersDataProvider } from "./contexts/SpeakersDataContext";

export const ConfigContext = React.createContext();

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <SpeakersDataProvider>
        <Speakers />
      </SpeakersDataProvider>
    </ConfigContext.Provider>
  );
};

export default App;
