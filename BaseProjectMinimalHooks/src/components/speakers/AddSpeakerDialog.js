import React from "react";

export default function AddSpeakerDialog() {
  return (
    <>
      <button
        onClick={() => {
          window.location.href = "/speakerpopup";
        }}
        className="btn btn-accent"
      >
        Add Speaker <i className="fa fa-plus" />
      </button>
    </>
  );
}
