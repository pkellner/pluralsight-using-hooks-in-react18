import { useState, useReducer } from "react";
export default function demo() {
  const [cnt, setCnt] = useReducer((state, action) => {
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
        setCnt({
          type: "increment",
          incrementValue: 1,
        })
      }
    >
      {cnt}
    </button>
  );
}
