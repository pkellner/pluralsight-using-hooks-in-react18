// speaker-list.js
import { Suspense, use, useState } from "react";
import axios from "axios";
import SpeakerLine from "./SpeakerLine"; // unchanged

/* ------------------------------------------------------------------ */
/*  1. Very small client-side “data cache” that works with Suspense   */
/* ------------------------------------------------------------------ */
const cache = new Map();

function fetchData(url) {
  if (!cache.has(url)) {
    console.log("Fetching data from cache...");
    cache.set(url, getData(url));
  }
  console.log("Fetching data from cache as always...");
  return cache.get(url); // returns the promise (or its value)
}

async function getData(url) {
  await new Promise((r) => setTimeout(r, 2000));
  const { data } = await axios.get(url);
  return data; // array of speaker records
}

function List({ speakers, setSpeakers }) {
  const updatingId = 0; // you can wire this to real “update” logic
  const isPending = false;

  function toggleFavoriteSpeaker(speakerRec) {
    setSpeakers((prev) =>
      prev.map((s) =>
        s.id === speakerRec.id ? { ...s, favorite: !s.favorite } : s,
      ),
    );
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
                onChange={() => {}}
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

      {/* actual speaker grid */}
      <div className="row g-3">
        {speakers.map((speakerRec) => (
          <SpeakerLine
            key={speakerRec.id}
            speakerRec={speakerRec}
            updating={updatingId === speakerRec.id ? updatingId : 0}
            toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec)}
            highlight={false}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3. The part that suspends, then seeds local state once resolved   */
/* ------------------------------------------------------------------ */
function SpeakersInner() {
  // Suspends until the promise in cache resolves, then returns data.
  const initialSpeakers = use(fetchData("http://localhost:3000/api/speakers"));

  // Keep speakers in state so we can mutate them later.
  const [speakers, setSpeakers] = useState(initialSpeakers);

  const darkTheme = false; // keep original prop

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List speakers={speakers} setSpeakers={setSpeakers} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  4. The exported component with a Suspense boundary                */
/* ------------------------------------------------------------------ */
export default function SpeakerList() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <SpeakersInner />
    </Suspense>
  );
}
