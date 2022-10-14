import { useContext, useMemo } from "react";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";
export default function useSpeakerSortAndFilter(speakerList) {
  const { speakingSaturday, speakingSunday, searchText } = useContext(
    SpeakerMenuContext
  );

  return useMemo(() => {
    
    console.log("useSpeakerSortAndFilter: speakerList:",speakerList)
  
    return speakerList
      ? speakerList
          .filter(
            ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
          )
          .filter(({ firstName, lastName }) => {
            return (
              searchText.length === 0 ||
              (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
                searchText.toLowerCase()
              )
            );
          })
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
    
    return speakerList
      ? speakerList
          .filter(
            ({ sat, sun }) =>
              (speakingSaturday && sat) || (speakingSunday && sun)
          )
          .filter(({ firstName, lastName }) => {
            return (
              searchText.length === 0 ||
              (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
                searchText.toLowerCase()
              )
            );
          })
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
  }, [speakingSaturday, speakingSunday, searchText]);

  // return speakerList
  //   ? speakerList
  //       .filter(
  //         ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
  //       )
  //       .filter(({ firstName, lastName }) => {
  //         return (
  //           searchText.length === 0 ||
  //           (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
  //             searchText.toLowerCase()
  //           )
  //         );
  //       })
  //       .sort(function (a, b) {
  //         if (a.firstName < b.firstName) {
  //           return -1;
  //         }
  //         if (a.firstName > b.firstName) {
  //           return 1;
  //         }
  //         return 0;
  //       })
  //   : [];
}
