import MyContextProvider from './demoContextDedicated';

function App() {
  return (
    <MyContextProvider>
      <MyChildren />
    </MyContextProvider>
  );
}

export default App;
