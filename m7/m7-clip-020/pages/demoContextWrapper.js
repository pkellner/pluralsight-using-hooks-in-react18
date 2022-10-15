import { createContext, useState } from 'react';

export const MyContext = createContext();

function App() {
  const [cnt, setCnt] = useState();
  return (
    <MyContext.Provider value={{ cnt, setCnt }}>
      <MyChildren />
    </MyContext.Provider>
  );
}

export default App;
