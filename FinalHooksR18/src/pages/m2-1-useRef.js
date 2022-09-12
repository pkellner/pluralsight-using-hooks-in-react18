import React from "react";

export default function MyComponent() {
  const RefExample = () => {
    const updates = React.useRef(0);
    const [text, setText] = React.useState("");

    React.useEffect(() => {
      updates.current++;
    });

    return (
      <div className="app">
        <div className="blue-wrapper">
          <input
            value={text}
            placeholder="Write something"
            onChange={(e) => setText(e.target.value)}
          />
          <Updates updates={updates.current} />
          <Tile />
          <TileMemo />
        </div>
      </div>
    );
  };

  return (
    <div>
      <RefExample />
    </div>
  );
}
