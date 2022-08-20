import { useEffect, useState } from "react";

const localStateValues = [];
let localStateValueIndex = -1;


function StateManagementExample({reRenderMe}) {
  
  function myUseState(initialValue) {
  
    localStateValueIndex++;
    const localStateValueIndexLocal =  Number(localStateValueIndex);
    
    if (localStateValues[localStateValueIndexLocal] === undefined) {
      localStateValues[localStateValueIndexLocal] = initialValue;
    }
    
    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
    }
    
    
    
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }

  const [cnt1, setCnt1] = myUseState(100);
  const [cnt2, setCnt2] = myUseState(200);
  
  return (
    <div>
      <button onClick={() => {
        setCnt1(cnt1+1);
        reRenderMe();
      }}>{cnt1}</button>
      <hr />
      <button onClick={() => {
        setCnt2(cnt2+1);
        reRenderMe();
      }}>{cnt2}</button>
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
