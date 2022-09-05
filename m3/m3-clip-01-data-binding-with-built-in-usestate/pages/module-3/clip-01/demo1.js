import { useState } from "react";

export default function Demo() {
  const [text1, setText1] = useState("first");
  const [text2, setText2] = useState("last");
  return (
    <div className="container">
      <h3>Simple State Management</h3>
      
      <input onChange={(e) => setText1(e.target.value)} value={text1} /> {text1}
      <hr/>
      <input onChange={(e) => setText2(e.target.value)} value={text2} /> {text2}
    </div>
  );
}
