import { useEffect, useState } from "react";

let localStateValue;

function StateManagementExample({reRenderMe}) {
  
  function myUseState(initialValue) {
    
    if (localStateValue === undefined) {
      localStateValue = initialValue;
    }
    
    const setValue = (val) => {
      localStateValue = val;
    }
    
    const retVals = [localStateValue, setValue];
    return retVals;
  }

  const [cnt1, setCnt1] = myUseState(100);
  
  return (
    <div>
      <button onClick={() => {
        setCnt1(cnt1+1);
        reRenderMe();
      }}>{cnt1}</button>
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
