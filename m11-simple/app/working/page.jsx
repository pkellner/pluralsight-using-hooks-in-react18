"use client";

import {
  startTransition,
  unstable_ViewTransition as ViewTransition,
  useState,
} from "react";
import { Video } from "./video";
import videos from "./data";

function Item() {
  return (
    <ViewTransition default="slow-fade">
      <Video video={videos[0]} />
    </ViewTransition>
  );
}

export default function Component() {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setShowItem((prev) => !prev);
          });
        }}
      >
        {showItem ? "➖" : "➕"}
      </button>

      {showItem ? <Item /> : null}
    </>
  );
}
