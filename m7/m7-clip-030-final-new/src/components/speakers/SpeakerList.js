import SpeakerLine from "./SpeakerLine";
import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import axios from "axios";

function List({ state, dispatch }) {
  const [updatingId, setUpdatingId] = useState(0);
  const isPending = false;
  const speakers = state.speakers;

  function toggleFavoriteSpeaker(speakerRec) {
    const speakerRecUpdated = {
      ...speakerRec,
      favorite: !speakerRec.favorite,
    };
    dispatch({
      type: "updateSpeaker",
      speaker: speakerRecUpdated,
    });
    async function updateAsync(rec) {
      setUpdatingId(rec.id);
      await axios.put(`/api/speakers/${rec.id}`, speakerRecUpdated);
      setUpdatingId(0);
    }
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
              toggleFavoriteSpeaker={useCallback(
                () => toggleFavoriteSpeaker(speakerRec),
                []
              )}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const { darkTheme } = useContext(ThemeContext);

  function reducer(state, action) {
    switch (action.type) {
      case "speakersLoaded":
        return {
          ...state,
          loading: false,
          speakers: action.speakers,
        };
      case "setLoadingStatus":
        return { ...state, loading: true };
      case "updateSpeaker":
        const speakersUpdated = state.speakers.map((rec) =>
          action.speaker.id === rec.id ? action.speaker : rec
        );
        return {
          ...state,
          speakers: speakersUpdated,
        };
      default:
        throw new Error(`case failure.  type: ${action.type}`);
    }
  }

  const initialState = {
    speakers: [],
    loading: true,
    updateItem: () => {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getDataAsync() {
      dispatch({ type: "setLoadingStatus" });
      const results = await axios.get("/api/speakers");
      dispatch({
        type: "speakersLoaded",
        speakers: results.data,
      });
    }
    getDataAsync();
  }, []);

  function updateSpeaker(speakerRec) {
    const speakerUpdated = speakers.map(function (rec) {
      return speakerRec.id === rec.id ? speakerRec : rec;
    });
    setSpeakers(speakerUpdated);
  }

  if (state.loading) return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List state={state} dispatch={dispatch} />
    </div>
  );
};

export default SpeakerList;
