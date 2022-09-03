import SpeakerLine from "./SpeakerLine";
import { speakerList } from "../../../speakersData";

function List() {
  const [items, setItems] = [speakerList, () => {}];
  const [updatingId, setUpdatingId] = [0, () => {}];

  function toggleFavoriteSpeaker(id) {
    //
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
