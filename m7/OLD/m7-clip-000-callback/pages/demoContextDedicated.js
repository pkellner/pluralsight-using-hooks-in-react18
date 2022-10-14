import {
  createContext,
  useState,
} from 'react';

export const MyContext = createContext();

function MyContextProvider({ children }) {
  const [cnt, setCnt] = useState();
  return (
    <MyContext.Provider
      value={{ cnt, setCnt }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;
