import React from "react";
import Layout from "./components/layout/Layout";
import { SpeakersDataProvider } from "./contexts/SpeakersDataContext";
import { AppRouterProvider } from "./contexts/AppRouterContext";

const App = ({ url }) => {
  // Layout does not use children but instead uses what comes from AppRouteProvider
  return (
    <AppRouterProvider url={url}>
      <SpeakersDataProvider>
        <Layout />
      </SpeakersDataProvider>
    </AppRouterProvider>
  );
};

export default App;
