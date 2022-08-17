import { useContext } from "react";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";

export default function useSpeakerSortAndFilter(speakerList) {
  const { speakingSaturday, speakingSunday } = useContext(SpeakerMenuContext);

  return speakerList
    ? speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        })
    : [];
}
