import { useRef } from "react";

export default function App() {
  // case 1: references DOM element
  const speakerImageElement = useRef();
  

  // case 2: reference value that does not cause re-render
  const mouseOverCnt = useRef(0);

  return (
    <div>
      <img
        src="/images/Speaker-1124.jpg"
        ref={speakerImageElement}
        style={{filter: "grayscale(100%)"}}
        onMouseOver={() => {
          speakerImageElement.current.style.filter = "grayscale(0%)";
          mouseOverCnt.current++;
        }}
        onMouseOut={() => {
          speakerImageElement.current.style.filter = "grayscale(100%)";
        }}
      />
      <hr/>
      <div>
        <button
          onClick={() => {
            alert("Registered! cnt: " + mouseOverCnt.current);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
