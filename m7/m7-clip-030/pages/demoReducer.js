import { useReducer } from "react";

export default function () {
  //const [cnt, setCnt] = useState(100);

  //const [cnt, setCnt] = useReducer((_, action) => action, 200);

  // function reducer(_, action) {
  //   return action;
  // }

  // function reducer(_, action) {
  //   switch (action.type) {
  //     default:
  //       return action;
  //   }
  // }

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + action.incrementValue;
      default:
        return action;
    }
  }

  const [cnt, setCnt] = useReducer(reducer, 300);

  // next thing is to change setCnt to dispatch

  // final thing is to change cnt to state and make state.cnt and change initialization

  //const [state, dispatch] = useReducer(reducer, 200);

  return (
    <div className="container">
      {" "}
      d<h1>Demo Reducer</h1>
      <button
        onClick={() => {
          //setCnt(cnt + 1);
          setCnt({
            type: "increment",
            incrementValue: 10,
          });
        }}
      >
        Increment Counter
      </button>
      <hr />
      {cnt}
    </div>
  );
}
