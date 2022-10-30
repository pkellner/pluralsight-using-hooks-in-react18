import { useEffect, useState } from "react";

export default function Demo() {
  const [cnt, setCnt] = useState(100);

  useEffect(() => {
    console.log("example: subscribe to events");
    return () => {
      console.log("example: unsubscribe");
    };
  }, []);

  function incrementCnt() {
    setCnt((previousState) => {
      return previousState + 1;
    });
  }

  //function incrementCnt() {
  //  setCnt(cnt + 1);
  //}

  return <button onClick={incrementCnt}>{cnt}</button>;
}
