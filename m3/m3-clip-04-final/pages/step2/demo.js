import React, { useEffect, useState } from "react";
import DemoApp from "./demoApp";

let localStateValue = undefined;

export default function Demo({useMyState}) {
  function useMyState(initial) {
    if (localStateValue === undefined) {
      localStateValue = initial;
    }
    const setValue = (val) => {
      localStateValue = val;
      reRenderMe();
    };
    const retVals = [localStateValue, setValue];
    console.log(retVals, localStateValue);
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

  return <DemoApp useMyState={(val) => useMyState(val, reRenderMe)} />;
}
