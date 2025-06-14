import { useState } from "react";

function BadComponent({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // This will be flagged
  }
  return <div>Test</div>;
}
