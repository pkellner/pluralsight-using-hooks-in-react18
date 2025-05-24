import React, { unstable_ViewTransition as ViewTransition } from "react";

export default function SpeakerName({ speaker: { id, firstName, lastName } }) {
  const nameForViewTransition = `SPEAKER_NAME_${id}`;
  return (
    <ViewTransition key={`${id}`} name={nameForViewTransition}>
      <div>
        {firstName} {lastName}
      </div>
    </ViewTransition>
  );
}
