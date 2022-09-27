import {useContext, useEffect, useReducer} from "react";
import SpeakerLine from "./SpeakerLine";
import {ThemeContext} from "../layout/Layout";
import axios from "axios";

function List({ state, dispatch }) {
  const [updatingId, setUpdatingId] = [
    0,
    (id) => {
      console.log("updating ", id);
    },
  ];

  return (
    <div className="container">
      <div className="row g-3">
        {state.items.map((speakerRec) => (
          <SpeakerLine
            key={speakerRec.id}
            speakerRec={speakerRec}
            updating={updatingId === speakerRec.id ? updatingId : 0}
            toggleFavoriteSpeaker={() => {
              dispatch({
                type: "toggleFavoriteSpeaker",
                id: speakerRec.id,
              });
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

  function reducer(state, action) {
    function toggleFavoriteSpeaker(id) {
      let updateSpeakerRec;
      const speakerDataRecs = state.items.map(function (rec) {
        if (rec.id === id) {
          updateSpeakerRec = { ...rec, favorite: !rec.favorite };
          return updateSpeakerRec;
        } else {
          return rec;
        }
      });
      return { ...state, items: speakerDataRecs };
    }

    switch (action.type) {
      case "toggleFavoriteSpeaker":
        return toggleFavoriteSpeaker(action.id);
      case "itemsLoaded":
        return { ...state, loading: false, items: action.items };
      case "setLoadingStatus":
        return { ...state, loading: action.loading };
      default:
        throw new Error(`case failure. type: ${action.type}`);
    }
  }

  const initialState = {
    items: [],
    loading: true,
    updateItem: () => {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getSpeakerData() {
      const results = await axios.get("/api/speakers/");
      dispatch({
        type: "itemsLoaded",
        items: results.data,
      });
    }
    getSpeakerData();
  }, []);

  if (state.loading) return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List state={state} dispatch={dispatch} />
    </div>
  );
};

export default SpeakerList;
