import {useState} from "react";

let localStateValue;

function Demo({reRenderMe}) {
  
  function useState(initialValue) {
    if (localStateValue === undefined) {
      localStateValue = initialValue;
    }
    
    const setValue = (val) => {
      localStateValue = val;
      reRenderMe();
    };
    
    const retVals = [localStateValue, setValue];
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
  return <Demo reRenderMe={reRenderMe} />
}


