import { useEffect, useState, useTransition } from "react";

function Spinner() {
  return <div>spinner...</div>;
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   async function doit() {
  //     await new Promise(r => setTimeout(r, 2000));
  //   }
  //   doit();
  // })

  function handleClick() {
    async function doit() {
      await new Promise((r) => setTimeout(r, 2000));
      console.log("after sleep");
    }
    doit();
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
