import React, { useContext, useEffect, useState } from "react";
import SpeakerLine from "./SpeakerLine";
import axios from "axios";
import { ThemeContext } from "../../contexts/ThemeContext";

function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getIt() {
      setItems(await getItems());
    }
    getIt();
    console.log("list: updating items"); // this called when not useCallback below
  }, [getItems]);
  return (
    <div className="container">
      <div className="row g-3">
        {items.map((speakerRec) => (
          <SpeakerLine key={speakerRec.id} speakerRec={speakerRec} />
        ))}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const { darkTheme } = useContext(ThemeContext);

  const getItems = async () => {
    console.log("getItems called");
    const results = await axios.get("/api/speakers/");
    return results.data;
  };

  console.log("SpeakerList rendered");

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      {/*<List getItems={useCallback(getItems, [])} />*/}
      <List getItems={getItems} />
    </div>
  );
};

export default SpeakerList;
