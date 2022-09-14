import React, { useEffect, useState } from "react";
import myUseState from "./myUseState";

function StateManagementExample({ reRenderMe }) {
  const [text1, setText1] = myUseState("First", reRenderMe);
  useEffect(() => {
    document.title = `${text1.length}`;
  });
  const [text2, setText2] = myUseState("Last", reRenderMe);

  console.log(text1, text2);

  return (
    <div className="container">
      <h3>Simple State and Lifecycle Management</h3>

      <input onChange={(e) => setText1(e.target.value)} value={text1} />
      <hr />
      <input onChange={(e) => setText2(e.target.value)} value={text2} />
      <hr />
      <h2>
        <i>
          {text1} {text2}
        </i>
      </h2>
    </div>
  );
}

export default function ParentComponent() {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("ParentComponent re-rendering");
  }, [cnt]); // could leave out dependency array and would get re-render on every state change which is same

  function reRenderMe() {
    console.log("reRenderMe called");
    setCnt(cnt + 1);
  }

  return <StateManagementExample reRenderMe={reRenderMe} />;
}
