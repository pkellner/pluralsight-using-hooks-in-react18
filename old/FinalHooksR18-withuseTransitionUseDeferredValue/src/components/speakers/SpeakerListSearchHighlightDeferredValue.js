import React, {
  useContext,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import SpeakerLine from "./SpeakerLine";
import axios from "axios";
import { ThemeContext } from "../../contexts/ThemeContext";

function List({ getItems }) {
  const [items, setItems] = useState([]);
  //const [highlightChars, setHighlightChars] = useState("");

  const [searchName, setSearchName] = useState("");
  const highlightChars = useDeferredValue(searchName, { timeoutMs: 10000 });

  //const [isPending, startTransition] = useTransition();
  const isPending = false;

  const [updatingId, setUpdatingId] = useState(0); // 0 means no current speaker updating
  useEffect(() => {
    async function getIt() {
      let itemsLoaded = await getItems();
      for (let increment = 1; increment < 15000; increment++) {
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
      setItems(itemsLoaded);
    }
    getIt();
    // console.log("list: updating items"); // this called when not useCallback below
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
      <div className="row g-3">
        <div className="col-xl-12 col-md-12">
          <div className="card border-0 speaker-list">
            <div
              className="btn-toolbarxx"
              role="toolbar"
              aria-label="Speaker toolbar filter"
            >
              <div className="toolbar-trigger mb-3">
                <div className="toolbar-search">
                  <input
                    value={searchName}
                    onChange={(event) => {
                      setSearchName(event.target.value);
                      // startTransition(() => {
                      //   setHighlightChars(event.target.value);
                      // });
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Highlight Names"
                  />
                </div>
              </div>
            </div>
            <div className="toolbar-trigger mb-3">
              {isPending && (
                <i className="spinner-border text-dark" role="status" />
              )}
            </div>
          </div>
        </div>
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
    //console.log("getItems called");
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
