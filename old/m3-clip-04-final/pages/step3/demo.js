import React, { useEffect, useState } from "react";
import DemoApp from "./demoApp";

const localStateValues = [];
let localStateValueIndex = 0;

export default function Demo() {
  function useMyState(initialValue, reRenderMe) {
    const localStateValueIndexLocal = localStateValueIndex; // capture in closure
    if (localStateValues[localStateValueIndex] === undefined) {
      localStateValues[localStateValueIndexLocal] = initialValue;
    }
    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
      reRenderMe();
    };
    localStateValueIndex++; // update global

    debugger;
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }

  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("UseMyState re-rendering");
  }, [cnt]); // could leave out dependency array and would get re-render on every state change which is same

  function reRenderMe() {
    console.log("reRenderMe called");
    setCnt(cnt + 1);
  }

  localStateValueIndex = 0;

  return <DemoApp useMyState={(val) => useMyState(val, reRenderMe)} />;
}
