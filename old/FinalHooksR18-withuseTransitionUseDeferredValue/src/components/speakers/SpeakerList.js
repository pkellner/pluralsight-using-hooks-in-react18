import React, {useContext, useEffect, useState} from "react";
import SpeakerLine from "./SpeakerLine";
import axios from "axios";
import {ThemeContext} from "../../contexts/ThemeContext";

function List({ getItems }) {
  const [items, setItems] = useState([]);
  const [updatingId, setUpdatingId] = useState(0); // 0 means no current speaker updating
  useEffect(() => {
    async function getIt() {
      setItems(await getItems());
    }
    getIt();
    console.log("list: updating items"); // this called when not useCallback below
  }, [getItems]);

  function toggleFavoriteSpeaker(id) {
    let updateSpeakerRec;
    const speakerDataRecs = items.map(function (rec) {
      if (rec.id === id) {
        updateSpeakerRec = { ...rec, favorite: !rec.favorite };
        return updateSpeakerRec;
      } else {
        return rec;
      }
    });
    const updateItem = async (id, rec) => {
      setUpdatingId(id);
      await axios.put(`/api/speakers/${id}`, rec);
      setUpdatingId(0);
    };
    setItems(speakerDataRecs);
    updateItem(id, updateSpeakerRec);
  }

  return (
    <div className="container">
      <div className="row g-3">
        {items.map((speakerRec) => (
          <SpeakerLine
            key={speakerRec.id}
            speakerRec={speakerRec}
            updating={updatingId === speakerRec.id ? updatingId : 0}
            toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec.id)}
          />
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

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      {/*<List getItems={useCallback(getItems, [])} />*/}
      <List getItems={getItems} />
    </div>
  );
};

export default SpeakerList;
