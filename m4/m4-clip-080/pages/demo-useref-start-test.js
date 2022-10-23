import { useEffect, useRef } from "react";

export default function Demo() {
  return (
    <div>
      <img src="/images/Speaker-1124.jpg" />
      <hr />
      <div>
        <button
          onClick={() => {
            alert("Registered!");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
