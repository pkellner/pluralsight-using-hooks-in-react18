import StateManagementExample from "./StateManagementExample";
import { useEffect, useState } from "react";

export default function ParentComponent() {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("ParentComponent re-rendering");
  }, [cnt]);

  function reRenderMe() {
    console.log("reRenderMe called");
    setCnt(cnt + 1);
  }

  return (
    <div>
      <StateManagementExample reRenderMe={reRenderMe} />
      <hr/>
      {cnt}
    </div>
  );

  //return <StateManagementExample reRenderMe={reRenderMe} >ABC</StateManagementExample>;
}
