import React from "react";
import Speakers from "./components/speakers/Speakers";
import Layout from "./components/layout/Layout";
import { SpeakersDataProvider } from "./contexts/SpeakersDataContext";

const App = () => {
  return (
    <SpeakersDataProvider>
      <Layout>
        <Speakers />
      </Layout>
    </SpeakersDataProvider>
  );
};

export default App;
