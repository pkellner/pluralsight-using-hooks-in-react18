import { useContext, useMemo } from 'react';
import { SpeakerMenuContext } from '../contexts/SpeakerMenuContext';

export default function useSpeakerSortAndFilter(
  speakerList,
) {
  const {
    speakingSaturday,
    speakingSunday,
    searchText,
  } = useContext(SpeakerMenuContext);

  if (!speakerList) {
    return [];
  }

  function speakerListCalc(
    speakerSaturday,
    speakingSunday,
    searchText,
  ) {
    console.log('speakerListCalc running');
    return speakerList
      .filter(
        ({ sat, sun }) =>
          (speakingSaturday && sat) ||
          (speakingSunday && sun),
      )
      .filter(({ firstName, lastName }) => {
        return (
          searchText.length === 0 ||
          (
            firstName?.toLowerCase() +
            lastName?.toLowerCase()
          ).includes(
            searchText.toLowerCase(),
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
      });
  }

  // RE-RENDERS WHEN HEART FAV CLICKED. USEMEMO PREVENTS THAT.
  // MUST BE FUNCTION SO THAT IS WHY REFACTOR IS NEEDED
  // const speakerListFinal = speakerListCalc(
  //   speakingSaturday,
  //   speakingSunday,
  //   searchText
  // );

  const speakerListFinal = useMemo(
    () =>
      speakerListCalc(
        speakingSaturday,
        speakingSunday,
        searchText,
      ),
    [
      speakingSaturday,
      speakingSunday,
      searchText,
    ],
  );

  return speakerListFinal;
}
