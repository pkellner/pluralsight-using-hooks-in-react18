import SpeakerLine from "./SpeakerLine";
import { useEffect, useState } from "react";
import axios from "axios";

function List({ speakers, updateSpeaker }) {
  const [updatingId, setUpdatingId] = useState(0);

  const isPending = false;

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
      <div className="border-0">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Speaker toolbar filter"
        >
          <div className="toolbar-trigger mb-3 flex-grow-04">
            <div className="toolbar-search w-100">
              <input
                value=""
                onChange={(event) => {}}
                type="text"
                className="form-control"
                placeholder="Highlight Names"
              />
            </div>
            <div className="spinner-height">
              {isPending && (
                <i className="spinner-border text-dark" role="status" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {speakers.map(function (speakerRec) {
          const highlight = false;
          return (
            <SpeakerLine
              key={speakerRec.id}
              speakerRec={speakerRec}
              updating={updatingId === speakerRec.id ? updatingId : 0}
              toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec)}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const darkTheme = false;

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
