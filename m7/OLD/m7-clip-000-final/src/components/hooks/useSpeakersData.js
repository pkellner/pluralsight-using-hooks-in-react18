import useGeneralizedCrudMethods from './useGeneralizedCrudMethods';

function useSpeakersData(
  url,
  errorNotificationFn,
) {
  const {
    data,
    error,
    loadingStatus,
    createRecord,
    updateRecord,
    deleteRecord,
  } = useGeneralizedCrudMethods(
    url,
    errorNotificationFn,
  );

  function createSpeaker(
    speakerRec,
    callbackDone,
  ) {
    createRecord(speakerRec, callbackDone);
  }

  function updateSpeaker(
    speakerRec,
    callbackDone,
  ) {
    updateRecord(speakerRec, callbackDone);
  }

  function deleteSpeaker(id, callbackDone) {
    deleteRecord(id, callbackDone);
  }

  return {
    data,
    loadingStatus,
    error,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
  };
}

export default useSpeakersData;
