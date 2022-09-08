import {useEffect, useState} from "react";

const localStateValues = [];
let localStateValueIndex = -1;



function Demo({reRenderMe}) {
  
  function useState(initialValue) {
    localStateValueIndex++; // update global
    const localStateValueIndexLocal = localStateValueIndex; // capture in closure
    
    if (localStateValues[localStateValueIndex] === undefined) {
      localStateValues[localStateValueIndexLocal] = initialValue;
    }
    
    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
      reRenderMe();
    };
    
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }
  
  const [text1, setText1] = useState("first");
  const [text2, setText2] = useState("last");
  
  return (
    <div className="container">
      <h3>Simple State Management</h3>
      <input onChange={(e) => setText1(e.target.value)} value={text1} /> {text1}
      <hr/>
      <input onChange={(e) => setText2(e.target.value)} value={text2} /> {text2}
    </div>
  );
}

export default function ParentComponent() {
  const [cnt, setCnt] = useState(0);
  function reRenderMe() {
    console.log("reRenderMe called");
    setCnt(cnt + 1);
  }
  localStateValueIndex = 0;
  return <Demo reRenderMe={reRenderMe} />
}


