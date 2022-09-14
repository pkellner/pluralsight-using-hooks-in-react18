import React, {useEffect} from "react";

let localStateValue = "";

function useState(initial) {
  if (initial != undefined) {
    localStateValue = initial;
  }
  const setValue = (val) => {
    localStateValue = val;
  };
  debugger;
  const retVals = [localStateValue, setValue];
  return retVals;
  
}

export default function Demo() {
  const [text1, setText1] = useState("First");
  useEffect(() => {
    document.title = `${text1.length}`;
  });
  const [text2, setText2] = useState("Last");
  
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
