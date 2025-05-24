import React, { unstable_ViewTransition as ViewTransition } from "react";

export default function SpeakerCompany({ speaker: { id, company } }) {
  const nameForViewTransition = `SPEAKER_COMPANY_${id}`;
  return (
    <ViewTransition key={`${id}`} name={nameForViewTransition}>
      <div>
        {company}
      </div>
    </ViewTransition>
  );
}
