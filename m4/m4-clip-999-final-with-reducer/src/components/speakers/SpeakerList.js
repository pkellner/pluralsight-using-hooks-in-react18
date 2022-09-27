import {useContext, useEffect, useReducer} from "react";
import SpeakerLine from "./SpeakerLine";
import {ThemeContext} from "../layout/Layout";
import axios from "axios";

function List({ state, dispatch }) {
  const [updatingId, setUpdatingId] = [
    0,
    (id) => {
      console.log("SpeakerList setUpdatingId called ", id);
    },
  ];

  function toggleFavoriteSpeaker(speakerRec) {
    const speakerRecUpdated = { ...speakerRec, favorite: !speakerRec.favorite };
    dispatch({
      type: "updateSpeaker",
      speaker: speakerRecUpdated,
    });
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
        {state.speakers.map((speakerRec) => (
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

  function speakerReducer(state, action) {
    switch (action.type) {
      case "updateSpeaker":
        const speakersUpdated = state.speakers.map((rec) =>
          action.speaker.id === rec.id ? action.speaker : rec
        );
        return { ...state, speakers: speakersUpdated };
      case "speakersLoaded":
        return { ...state, loading: false, speakers: action.speakers };
      case "setLoadingStatus":
        return { ...state, loading: action.loading };
      default:
        throw new Error(`case failure. type: ${action.type}`);
    }
  }

  const initialState = {
    speakers: [],
    loading: true,
    updateItem: () => {},
  };

  const [state, dispatch] = useReducer(speakerReducer, initialState);

  useEffect(() => {
    async function getDataAsync() {
      const results = await axios.get("/api/speakers/");
      dispatch({
        type: "speakersLoaded",
        speakers: results.data,
      });
    }
    getDataAsync();
  }, []);

  if (state.loading) return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List state={state} dispatch={dispatch} />
    </div>
  );
};

export default SpeakerList;
