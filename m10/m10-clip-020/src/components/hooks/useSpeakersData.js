import useGeneralizedCrudMethods from "./useGeneralizedCrudMethods";

function useSpeakersData() {
  const url = "/api/speakers";
  const errorNotificationFn = (error) => {
    console.log("Error From useSpeakersData", error);
  };

  const {
    data,
    error,
    loadingStatus,
    createRecord,
    updateRecord,
    deleteRecord,
  } = useGeneralizedCrudMethods(url, errorNotificationFn);

  function createSpeaker(speakerRec, callbackDone) {
    createRecord(speakerRec, callbackDone);
  }

  function updateSpeaker(speakerRec, callbackDone) {
    updateRecord(speakerRec, callbackDone);
  }

  function deleteSpeaker(id, callbackDone) {
    deleteRecord(id, callbackDone);
  }

  return {
    speakerList: data,
    loadingStatus,
    error,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
  };
}

export default useSpeakersData;
