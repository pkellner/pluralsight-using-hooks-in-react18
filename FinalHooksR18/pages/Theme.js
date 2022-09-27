import {useCallback, useEffect, useState} from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("list: updating items");
  }, [getItems]);
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

// https://www.youtube.com/watch?v=_AyFP5s69N4
const Page = () => {
  const [number, setNumber] = useState(100);
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const getItems = () => {
    return [number, number + 1];
  };

  return (
    <>
      <style jsx>
        {`
          .theme-dark {
            background-color: #0062cc;
          }
          .theme-light {
            background-color: #0062cc37;
          }
        `}
      </style>
      <div className={theme === "light" ? "theme-light" : "theme-dark"}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <br />
        {/*<List getItems={getItems} />*/}
        <List getItems={useCallback(getItems, [])} />
      </div>
    </>
  );
};

export default Page;
