import { useDeferredValue, useMemo, useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  console.log(`search:${search}   deferredSearch:${deferredSearch}`);

  return (
    <>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <SlowResults query={deferredSearch} />
    </>
  );
}

function SlowResults({ query }) {
  const data = useMemo(() => {
    // this console.log should be called less than every keystroke
    // but don't be fooled as React can be pretty fast
    console.log("createDummySpeakers called");
    return createDummySpeakers(3000).filter((speaker) =>
      speaker.lastName.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <>
      {data.map((speaker) => {
        return (
          <div key={speaker.id}>
            {speaker.id} - {speaker.lastName}
          </div>
        );
      })}
    </>
  );
}

function createDummySpeakers(numToAdd) {
  let speakers = [];
  for (let increment = 1; increment < numToAdd; increment++) {
    speakers.push({
      id: 100000 + increment,
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
  return speakers;
}
