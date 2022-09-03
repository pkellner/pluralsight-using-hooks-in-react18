import SpeakerDetail from "./SpeakerDetail";
import { speakerList } from "../../../speakersData";

export default function Speaker({ id }) {
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  return speakerRec ? (
    <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
  ) : (
    <h2 className="text-danger">Speaker ...{id} not found</h2>
  );
}
