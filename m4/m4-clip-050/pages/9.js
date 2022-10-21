import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + action.incrementValue;
    default:
      return action;
  }
}

export default function demo() {
  const [state, dispatch] =
    useReducer(reducer, 10);
  return (
    <button
      onClick={() =>
        dispatch({
          type: "increment",
          incrementValue: 1,
        })
      }
    >
      {cnt}
    </button>
  );
}
