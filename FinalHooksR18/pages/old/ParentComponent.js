import StateManagementExample from "./StateManagementExample2";
import {useEffect, useState} from "react";

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
