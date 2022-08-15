import React from "react";
import Speakers from "./components/speakers/Speakers";
import { ConfigProvider } from "./contexts/ConfigContext";
import Layout from "./components/layout/Layout";
import { SpeakersDataProvider } from "./contexts/SpeakersDataContext";

const App = () => {
  return (
    <ConfigProvider>
      <SpeakersDataProvider>
        <Layout>
          <Speakers />
        </Layout>
      </SpeakersDataProvider>
    </ConfigProvider>
  );
};

export default App;
