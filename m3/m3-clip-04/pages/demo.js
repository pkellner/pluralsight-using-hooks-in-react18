import DemoApp from "./demoApp";
import { useState, useEffect } from "react";

const localStateValues = [];
let localStateValueIndex = 0;
export default function Demo() {
  function useMyState(initial) {
    const localStateValueIndexLocal = localStateValueIndex; // closure
    if (localStateValues[localStateValueIndexLocal] === undefined) {
      localStateValues[localStateValueIndexLocal] = initial;
    }
    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
      reRenderMe();
    };
    localStateValueIndex++; // update global
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("rendering...");
  }, [cnt]);
  function reRenderMe() {
    setCnt(cnt + 1);
    console.log("reRenderMe called...");
  }
  localStateValueIndex = 0;
  return <DemoApp useState={useMyState} />
}