import {useEffect, useState} from "react";
import DemoApp from "./demoApp";

let localStateValue = undefined;

export default () => {
  function useMyState(initial) {
    if (localStateValue === undefined) {
      localStateValue = initial;
    }
    const setValue = (val) => {
      localStateValue = val;
      reRenderMe();
    };
    const retVals = [localStateValue, setValue];
    return retVals;
  }
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("rendering...");
  }, [cnt]);
  function reRenderMe() {
    console.log("reRenderMe called...");
    setCnt(cnt + 1);
  }
  return <DemoApp useState={useMyState} />;
};
