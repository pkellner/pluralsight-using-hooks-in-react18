import {unstable_ViewTransition as ViewTransition} from "react";
import { CONFERENCE_TITLE_TRANSITION } from "@/app/page";

function SpeakerListSubTitle() {
  return (
    <ViewTransition name={CONFERENCE_TITLE_TRANSITION}>
      <h1 className="display-4 text-secondary">
        Silicon Valley Code Camp Speakers
      </h1>
    </ViewTransition>
  );
}

export default function SpeakerList() {
  return (
    <div className="container">
      <SpeakerListSubTitle />
      <div className="row">
        <div className="col-md-12">
          <h2>Speakers</h2>
          <ul className="list-group">
            <li className="list-group-item">Speaker 1</li>
            <li className="list-group-item">Speaker 2</li>
            <li className="list-group-item">Speaker 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
