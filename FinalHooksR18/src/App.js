import React from 'react';
import Speakers from './Speakers';
import { GlobalProvider } from './GlobalState';
import { FavoriteClickCountProvider } from './FavoriteClickCountContext';

export const ConfigContext = React.createContext();

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
        <FavoriteClickCountProvider>
          <Speakers />
        </FavoriteClickCountProvider>
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
