import React, { useState, useEffect } from 'react';

// class ClassComponent extends React.Component {
//   render() {
//     useEffect(() => {});
//     return <div>Class Component</div>;
//   }
// }

const trackChanges = true;

export default function Demo() {

  function myText2(init) {
    return useState("Last");
  }

  const [text1, setText1] = useState('First');
  if (trackChanges) {
    useEffect(() => {
      document.title = `${text1.length}`;
    });
  }
  const [text2, setText2] = useState('Last');

  return (
    <div className="container">
      <h3>Simple State and Lifecycle Management</h3>

      <input onChange={(e) => setText1(e.target.value)} value={text1} />
      <hr/>
      <input onChange={(e) => setText2(e.target.value)} value={text2} />
      <hr/>
      <h2>
        <i>{text1} {text2}</i>
      </h2>
    </div>
  )
}
