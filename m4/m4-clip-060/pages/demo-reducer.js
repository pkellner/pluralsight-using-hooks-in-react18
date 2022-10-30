import { useReducer } from "react";

export default function demo() {
  const [cnt, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.incrementValue;
      default:
        return action;
    }
  }, 10);

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
