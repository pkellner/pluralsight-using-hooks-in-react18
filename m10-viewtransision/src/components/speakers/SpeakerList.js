import SpeakerLine from "./SpeakerLine";
import SpeakerDetail from "./SpeakerDetail";
import { useContext, useEffect, useState, useTransition } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import axios from "axios";

function List({ speakers, onSpeakerSelect }) {
  const [searchName, setSearchName] = useState("");
  const [highlightChars, setHighlightChars] = useState();
  const [isPending, startTransition] = useTransition();

  function toggleFavoriteSpeaker(speakerRecord) {
    const speakerRecordUpdated = {
      ...speakerRecord,
      favorite: !speakerRecord.favorite,
    };

    async function updateAsync(record) {
      try {
        await axios.put(`/api/speakers/${record.id}`, speakerRecordUpdated);
      } catch (error) {
        console.error("Error updating speaker:", error);
      }
    }
    updateAsync(speakerRecordUpdated);
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
                value={searchName}
                onChange={(event) => {
                  setSearchName(event.target.value);
                  startTransition(() => {
                    setHighlightChars(event.target.value);
                  });
                }}
                type="text"
                className="form-control"
                placeholder="Highlight Names"
              />
            </div>
            <div className="spinner-height">
              {isPending && (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {speakers.map(function (speakerRecord) {
          const highlight =
            highlightChars?.length > 0 &&
            (
              speakerRecord.firstName?.toLowerCase() +
              speakerRecord.lastName?.toLowerCase()
            ).includes(highlightChars.toLowerCase())
              ? true
              : false;
          return (
            <SpeakerLine
              key={speakerRecord.id}
              speakerRec={speakerRecord}
              updating={0}
              toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRecord)}
              highlight={highlight}
              onSpeakerSelect={onSpeakerSelect}
            />
          );
        })}
      </div>
    </div>
  );
}

function SpeakerList() {
  const { darkTheme } = useContext(ThemeContext);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function getDataAsync() {
      try {
        setLoading(true);
        const results = await axios.get("/api/speakers");
        setSpeakers(results.data);
      } catch (error) {
        console.error("Error loading speakers:", error);
      } finally {
        setLoading(false);
      }
    }

    startTransition(() => {
      getDataAsync();
    });
  }, []);

  function handleSpeakerSelect(speakerRecord) {
    startTransition(() => {
      setSelectedSpeaker(speakerRecord);
    });
  }

  function handleBackToList() {
    startTransition(() => {
      setSelectedSpeaker(null);
    });
  }

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading speakers...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      {selectedSpeaker ? (
        <SpeakerDetail
          speakerRec={selectedSpeaker}
          showDetails={true}
          onBackToList={handleBackToList}
        />
      ) : (
        <List speakers={speakers} onSpeakerSelect={handleSpeakerSelect} />
      )}
    </div>
  );
}

export default SpeakerList;
