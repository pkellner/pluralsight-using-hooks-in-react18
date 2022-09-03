import SpeakerLine from "./SpeakerLine";
import {speakerList} from "../../../speakersData";

function List() {
  const [items, setItems] = [speakerList, () => {}];
  const [updatingId, setUpdatingId] = [0, () => {}];

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
      // update REST
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
  const { darkTheme } = { darkTheme: false };

  const getItems = async () => {
    return speakerList;
  };

  console.log("SpeakerList rendered");

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      {/*<List getItems={useCallback(getItems, [])} />*/}
      <List />
    </div>
  );
};

export default SpeakerList;
