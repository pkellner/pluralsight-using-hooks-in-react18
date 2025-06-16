import Layout from "./components/layout/Layout";

const App = ({ url }) => {
  console.log("/App.jsx:", url);
  return <Layout url={url} />;
};

export default App;
