import React from 'react';
import { AppRouterProvider } from './components/contexts/AppRouterContext';
import Layout from './components/layout/Layout';

const App = ({ url }) => {
  return (
    <AppRouterProvider url={url}>
      <Layout />
    </AppRouterProvider>
  );
};

export default App;
