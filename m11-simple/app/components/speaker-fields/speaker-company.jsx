import React, { unstable_ViewTransition as ViewTransition } from "react";

export default function SpeakerCompany({ speaker: { id, company } }) {
  return (
    <ViewTransition key={`${id}`} name={`SPEAKER_COMPANY_${id}`}>
      {company}
    </ViewTransition>
  );
}
