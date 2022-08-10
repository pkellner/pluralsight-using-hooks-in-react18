import useGeneralizedCrudMethods from "./useGeneralizedCrudMethods";

function useSpeakersData(url, errorNotificationFn) {
  const { data, error, loadingStatus, createRecord, updateRecord, deleteRecord } =
    useGeneralizedCrudMethods(url, errorNotificationFn);
  
  function createSpeaker(speakerRec) {
    createRecord(speakerRec);
  }
  
  function updateSpeaker(speakerRec) {
    updateRecord(speakerRec);
  }
  
  function deleteSpeaker(id) {
    deleteRecord(id);
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
