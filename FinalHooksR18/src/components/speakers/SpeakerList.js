import React, {
  useContext,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";
import SpeakerLine from "./SpeakerLine";
import axios from "axios";
import { ThemeContext } from "../../contexts/ThemeContext";

function List({ getItems }) {
  const [items, setItems] = useState([]);
  const [highlightChars, setHighlightChars] = useState(""); // * comment this out for useDeferredValue

  const [searchName, setSearchName] = useState("");
  //const highlightChars = useDeferredValue(searchName,  {timeoutMs: 10000}); // use for useDeferredValue

  const [isPending, startTransition] = useTransition(); // * comment this out for useDeferredValue
  //const isPending = false; // use for useDeferredValue

  const [updatingId, setUpdatingId] = useState(0); // 0 means no current speaker updating
  useEffect(() => {
    async function getItemsAsync() {
      let itemsLoaded = await getItems();
      addDummySpeakers(itemsLoaded, 8000);
      setItems(itemsLoaded);
    }
    getItemsAsync();
  }, [getItems]);

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
      await axios.put(`/api/speakers/${id}`, rec);
      setUpdatingId(0);
    };
    setItems(speakerDataRecs);
    updateItem(id, updateSpeakerRec);
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
                    // * comment this out for useDeferredValue
                    setHighlightChars(event.target.value); // * comment this out for useDeferredValue
                  }); // * comment this out for useDeferredValue
                }}
                type="text"
                className="form-control"
                placeholder="Highlight Names"
              />
            </div>
            <div className="position-relative spinner-height">
              {isPending && (
                <i className="spinner-border text-dark" role="status" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {items.map(function (speakerRec) {
          const highlight =
            highlightChars?.length > 0 &&
            (
              speakerRec.firstName?.toLowerCase() +
              speakerRec.lastName?.toLowerCase()
            ).includes(highlightChars.toLowerCase())
              ? true
              : false;

          return (
            <SpeakerLine
              key={speakerRec.id}
              speakerRec={speakerRec}
              updating={updatingId === speakerRec.id ? updatingId : 0}
              toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec.id)}
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

  const getItems = async () => {
    const results = await axios.get("/api/speakers/");
    return results.data;
  };

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      {/*<List getItems={useCallback(getItems, [])} />*/}
      <List getItems={getItems} />
    </div>
  );
};

export default SpeakerList;

function addDummySpeakers(itemsLoaded, numToAdd) {
  for (let increment = 1; increment < numToAdd; increment++) {
    itemsLoaded.push({
      id: 1000000 + increment,
      firstName: `Craig${increment}`,
      lastName: `Mantle${increment}`,
      favorite: false,
      bio: "fake bio",
      company: "fake company",
      twitterHandle: `fakeTwitterHandle${increment}`,
      userBioShort: `fake short bio ${increment}`,
      imageUrl: "",
      email: `FakeEmail${increment}@codecamp.net`,
    });
  }
}
