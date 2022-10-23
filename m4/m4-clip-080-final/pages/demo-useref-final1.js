import { useEffect, useRef, useState } from "react";

function demo() {
  const renderCount = useRef(1);
  console.log(renderCount)''
  return (
    <div ref={renderCount}></div>
  )
}

function App({ children }) {
  // case 1: references DOM element
  const myRef = useRef(0);

  myRef.current++;

  const compRet = <div>{myRef.current}</div>;
  console.log(compRet);
  return compRet;
}

export default function demo() {
  const [cnt, setCnt] = useState(100);

  return (
    <button
      onClick={() => {
        setCnt((prevState) => prevState + 1);
      }}
    >
      {cnt}
      <App />
    </button>
  );

  // const app = (
  //   <App>
  //     <div
  //       onClick={() => {
  //         console.log(`render`);
  //       }}
  //     >Click Mex</div>
  //   </App>
  // );
  // console.log(app);
  // return app;
}
