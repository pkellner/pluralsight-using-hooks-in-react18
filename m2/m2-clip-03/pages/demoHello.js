import { useState, useEffect } from "react";

export default function App() {

  //const helloMessage = "Hello From Pluralsight";
  const [helloMessage, setHelloMessage] =
    useState("Hello From Pluralsight");
  
  useEffect(() => setHelloMessage(`${helloMessage} on ${new Date()}`),[]);
  
  return (
    <>
      <h1>{helloMessage}</h1>
    </>
  );
}