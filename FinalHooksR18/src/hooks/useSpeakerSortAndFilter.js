import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

export default function useSpeakerSortAndFilter(speakerList) {
  const { speakingSaturday, speakingSunday } = useContext(MenuContext);

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
