const cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  // delay return to simulate network latency
  //return cache.get(url);
  return new Promise((resolve) =>
    setTimeout(
      () =>
        fetch(url)
          .then((r) => r.json())
          .then(resolve),
      1000,
    ),
  );
}

async function getData(url) {
  if (url.endsWith("/api/speakers")) {
    return getSpeakers(url);
  } else {
    throw Error("Not implemented");
  }
}

async function getSpeakers(url) {
  await new Promise((r) => setTimeout(r, 2000));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json(); // array of speaker records
}
