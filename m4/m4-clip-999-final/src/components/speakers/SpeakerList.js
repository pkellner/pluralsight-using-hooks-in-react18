import {useContext, useEffect, useState} from "react";
import SpeakerLine from "./SpeakerLine";
import {ThemeContext} from "../layout/Layout";
import axios from "axios";

function List({ speakers, updateSpeaker }) {
  const [updatingId, setUpdatingId] = [
    0,
    (id) => {
      console.log("SpeakerList setUpdatingId called ", id);
    },
  ];

  function toggleFavoriteSpeaker(speakerRec) {
    const speakerRecUpdated = { ...speakerRec, favorite: !speakerRec.favorite };
    updateSpeaker(speakerRecUpdated);
    const updateAsync = async (rec) => {
      setUpdatingId(rec.id);
      await axios.put(`/api/speakers/${rec.id}`, speakerRecUpdated);
      setUpdatingId(0);
    };
    updateAsync(speakerRecUpdated);
  }

  return (
    <div className="container">
      <div className="row g-3">
        {speakers.map((speakerRec) => (
          <SpeakerLine
            key={speakerRec.id}
            speakerRec={speakerRec}
            updating={updatingId === speakerRec.id ? updatingId : 0}
            toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec)}
          />
        ))}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const { darkTheme } = useContext(ThemeContext);

  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataAsync() {
      setLoading(true);
      const results = await axios.get("/api/speakers/");
      setSpeakers(results.data);
      setLoading(false);
    }
    getDataAsync();
  }, []);

  function updateSpeaker(speakerRec) {
    const speakersUpdated = speakers.map(function (rec) {
      return speakerRec.id === rec.id ? speakerRec : rec;
    });
    setSpeakers(speakersUpdated);
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List
        speakers={speakers}
        setSpeakers={setSpeakers}
        updateSpeaker={updateSpeaker}
      />
    </div>
  );
};

export default SpeakerList;
