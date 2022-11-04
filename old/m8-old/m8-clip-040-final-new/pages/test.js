import {useEffect, useState} from "react";

export default function App() {
  // https://codepen.io/zebateira/pen/VvqJwm
  
  const [cnt, setCnt] = useState(9);
  
  useEffect(() => {
    const timer = setInterval(function() {
      if (cnt > 0) setCnt(cnt - 1);
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [cnt]);
  
  
  function startCountDown() {
    setCnt(9);
  }
  
  return (
    
    <div className="flex-row">
      <button type="button" onClick={startCountDown} className="btn btn-primary">Reset</button>
      <div className="numberCircle"><span>{cnt}</span></div>
    </div>
  );
}
