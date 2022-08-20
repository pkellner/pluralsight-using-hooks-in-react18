import { useState } from "react";

let localStateValue = [];
let localStateValuePointer = 0;

export default function StateManagementExample1({reRenderMe}) {
  
  function myUseState(initialValue) {
    
    if (localStateValue === undefined) {
      localStateValue = initialValue;
    }
    
    const setValue = (val) => {
      localStateValue[localStateValuePointer] = val;
      localStateValuePointer++;
    }
  
    localStateValuePointer++;
    
    const retVals = [localStateValue, setValue];
    return retVals;
  }
  
  const [cnt1, setCnt1] = myUseState(100);
  const [cnt2, setCnt2] = myUseState(1000);
  
  // const [cnt1, setCnt1] = useState(100);
  // const [cnt2, setCnt2] = useState(1000);
  
  return (
    <div>
      <button onClick={() => {
        setCnt1(cnt1+1);
        reRenderMe();
      }}>{cnt1}</button>
      <button onClick={() => {
        setCnt2(cnt2+1);
        reRenderMe();
      }}>{cnt2}</button>
    </div>
  );
}
