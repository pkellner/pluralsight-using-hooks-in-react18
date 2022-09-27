import React from "react";
import Layout from "./components/layout/Layout";
import {AppRouterProvider} from "./contexts/AppRouterContext";

const App = ({ url }) => {
  return (
    <AppRouterProvider url={url}>
      <Layout />
    </AppRouterProvider>
  );
};

export default App;
