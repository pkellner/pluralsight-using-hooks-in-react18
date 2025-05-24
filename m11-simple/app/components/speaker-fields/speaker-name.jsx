import React, { unstable_ViewTransition as ViewTransition } from "react";

export default function SpeakerName({ speaker: { id, firstName, lastName } }) {
  return (
    <ViewTransition key={`${id}`} name={`SPEAKER_NAME_${id}`}>
      {firstName} {lastName}
    </ViewTransition>
  );
}
