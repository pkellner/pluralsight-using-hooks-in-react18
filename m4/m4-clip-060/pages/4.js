import { useState, useReducer } from "react";
export default function demo() {
  const [cnt, setCnt] = 
    useReducer((state, action) => {
      return action
    }, 10);

  return <button onClick={
    () => setCnt(cnt + 1)}>
    {cnt}
  </button>
}