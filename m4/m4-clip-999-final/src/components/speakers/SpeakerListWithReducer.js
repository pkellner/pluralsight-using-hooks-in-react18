import { useContext, useEffect, useState } from "react";
import SpeakerLine from "./SpeakerLine";
import { ThemeContext } from "../layout/Layout";
import axios from "axios";

function List({ items, setItems }) {
  const [updatingId, setUpdatingId] = [0, (id) => {console.log("updating ", id)}];
  
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
    setItems(speakerDataRecs);
    return updateSpeakerRec;
  }
  
  
  return (
    <div className="container">
      <div className="row g-3">
        {items.map((speakerRec) => (
          <SpeakerLine
            key={speakerRec.id}
            speakerRec={speakerRec}
            updating={updatingId === speakerRec.id ? updatingId : 0}
            toggleFavoriteSpeaker={() => {
              const updatedRec = toggleFavoriteSpeaker(speakerRec.id);
              const updateItem = async (rec) => {
                setUpdatingId(rec.id);
                await axios.put(`/api/speakers/${rec.id}`, updatedRec);
                setUpdatingId(0);
              };
              updateItem(speakerRec);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const { darkTheme } = useContext(ThemeContext);
  
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
    setItems(speakerDataRecs);
  }

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
      <List items={items} setItems={setItems} toggleSpeakerFavorite={toggleFavoriteSpeaker} />
    </div>
  );
};

export default SpeakerList;
