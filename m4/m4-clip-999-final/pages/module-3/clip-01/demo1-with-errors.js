import { useEffect, useState } from "react";

const trackChanges = true;

class Bad3 extends React.Component {
  render() {
    useEffect(() => {});
    return <h1>Class Component</h1>;
  }
}

function DisplayNames({ text1, text2 }) {
  return (
    <h2>
      <i>
        {text1} {text2}
      </i>
    </h2>
  );
}

export default function Demo() {
  function createStateHooks(first) {
    const [text1, setText1] = useState(first);
  }
  const [text1, setText1] = createStateHooks("First");

  //const [text1, setText1] = useState("First");

  if (trackChanges) {
    useEffect(() => {
      document.title = `${text1.length} text1 length`;
    }, [text1]);
  }

  const [text2, setText2] = useState("Last");

  return (
    <div className="container">
      <h3>Simple State Management</h3>

      <input onChange={(e) => setText1(e.target.value)} value={text1} />
      <hr />
      <input onChange={(e) => setText2(e.target.value)} value={text2} />
      <hr />
      <DisplayNames text1={text1} text2={text2} />
    </div>
  );
}
