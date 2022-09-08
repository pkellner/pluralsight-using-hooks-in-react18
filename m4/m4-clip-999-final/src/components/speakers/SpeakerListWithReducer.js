import { useContext, useEffect, useState } from "react";
import SpeakerLine from "./SpeakerLine";
import { ThemeContext } from "../layout/Layout";
import axios from "axios";

function List({ items, setItems }) {
  const [updatingId, setUpdatingId] = [0, () => {}];
  
  function toggleFavoriteSpeaker(id) {
    let updateSpeakerRec;
    debugger;
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

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSpeakerData() {
      setLoading(true);
      const results = await axios.get("/api/speakers/");
      setItems(results.data);
      setLoading(false);
    }
    getSpeakerData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List items={items} setItems={setItems} />
    </div>
  );
};

export default SpeakerList;
