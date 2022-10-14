import React, { createContext } from 'react';
import useAppRouter from '../hooks/useAppRouter';

export const AppRouterContext =
  createContext({});

export const AppRouterProvider = ({
  children,
  url,
}) => {
  const { activeComponent, setRoute } =
    useAppRouter(url);

  const value = {
    activeComponent,
    setRoute,
  };

  return (
    <AppRouterContext.Provider value={value}>
      {children}
    </AppRouterContext.Provider>
  );
};
