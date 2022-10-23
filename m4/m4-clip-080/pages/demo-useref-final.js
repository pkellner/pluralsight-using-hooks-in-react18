import { useEffect, useRef } from "react";

export default function App() {
  // case 1: references DOM element
  const speakerImageElement = useRef();
  const mouseOverCnt = useRef(0);

  // case 2: reference value that does not cause re-render
  mouseOverCnt.current = mouseOverCnt.current + 1;

  const mouseInCnt = useRef(0);

  return (
    <div>
      <img
        src="/images/Speaker-1124.jpg"
        ref={speakerImageElement}
        style={{filter: "grayscale(100%)"}}
        onMouseOver={() => {
          speakerImageElement.current.style.filter = "grayscale(0%)";
          mouseInCnt.current++;
        }}
        onMouseOut={() => {
          speakerImageElement.current.style.filter = "grayscale(100%)";
        }}
      />
      <hr/>
      <div>
        <button
          onClick={() => {
            alert(mouseInCnt.current);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
