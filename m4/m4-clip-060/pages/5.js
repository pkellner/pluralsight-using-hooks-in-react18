import { useState, useReducer } from "react";
export default function demo() {
  const [cnt, setCnt] = 
    useReducer((state, action) => {
      switch (action.type) {
        case "increment":
          return state + action.incrementValue;
        default:
          return action;
      }
    }, 10);

  return <button onClick={
    () => setCnt(cnt + 1)}>
    {cnt}
  </button>
}