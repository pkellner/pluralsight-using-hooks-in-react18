import React, { useEffect, useState } from "react";

const localStateValues = [];
let localStateValueIndex = 0;

function StateManagementExample({ reRenderMe }) {
  function myUseState(initialValue) {
    const localStateValueIndexLocal = localStateValueIndex; // capture in closure
    if (localStateValues[localStateValueIndex] === undefined) {
      localStateValues[localStateValueIndexLocal] = initialValue;
    }
    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
    };
    localStateValueIndex++; // update global
    
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }
  
  const [text1, setText1] = myUseState("First");
  useEffect(() => {
    document.title = `${text1.length}`;
  });
  const [text2, setText2] = myUseState("Last");
  
  return (
    <div className="container">
      <h3>Simple State and Lifecycle Management</h3>
      
      <input onChange={(e) => {
        setText1(e.target.value);
        reRenderMe();
      }} value={text1} />
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
  
  localStateValueIndex = 0;
  
  return <StateManagementExample reRenderMe={reRenderMe} />;
}
