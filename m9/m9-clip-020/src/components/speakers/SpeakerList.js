import SpeakerLine from "./SpeakerLine";
import { useContext, useDeferredValue, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";

function List({ speakers }) {
  const [updatingId, setUpdatingId] = useState(0);
  const { updateSpeaker } = useContext(SpeakersDataContext);
  const [searchName, setSearchName] = useState("");

  const highlightChars = useDeferredValue(searchName, { timeoutMs: 10000 });

  const isPending = false;

  function toggleFavoriteSpeaker(speakerRec) {
    const speakerRecUpdated = { ...speakerRec, favorite: !speakerRec.favorite };
    setUpdatingId(speakerRecUpdated.id);
    updateSpeaker(speakerRecUpdated, () => {
      setUpdatingId(0);
    });
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
                }}
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
  const { darkTheme } = useContext(ThemeContext);
  const { data: speakerList, loadingStatus } = useContext(SpeakersDataContext);
  
  if (speakerList) {
    addDummySpeakers(speakerList, 8000);
  }

  if (loadingStatus === "loading") return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List speakers={speakerList} />
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

