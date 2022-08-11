import { useEffect, useState } from "react";
import axios from "axios";

const LOADING_STATES = ["loading", "errored", "success"];

function useGeneralizedCrudMethods(url, errorNotificationFn) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loadingStatus, setLoadingStatus] = useState("");

  if (!url || url.length === 0) {
    throw "useGeneralizedCrudMethods no url passed in error";
  }
  
  function formatErrorString(e, url) {
    const errorString =
      e?.response?.status === 404
        ? e?.message + " url " + url
        : e?.message + e?.response?.data;
    console.log(errorString);
    return errorString;
  }

  useEffect(() => {
    async function getData() {
      try {
        setLoadingStatus(LOADING_STATES[0]);
        const results = await axios.get(url);
        setData(results.data);
        setLoadingStatus(LOADING_STATES[2]);
      } catch (e) {
        setError(e);
        setLoadingStatus(LOADING_STATES[1]);
      }
    }
    getData();
  }, [url]);

  function createRecord(createObject) {
    
    // NEED TO HANDLE FAILURE CASE HERE WITH REWIND TO STARTING DATA
    // AND VERIFY createObject has id
    
    async function addData() {
      try {
        createObject.id = Math.max(...data.map(o => o.id), 0) + 1;
        await axios.post(`${url}/${createObject.id}`, createObject);
        setData(function (oriState) {
          return [createObject,...oriState, ];
        });
      } catch (e) {
        const errorString = formatErrorString(e, url);
        errorNotificationFn?.(errorString);
      }
    }
    addData();
  }
  function updateRecord(updateObject) {
    const id = updateObject.id; // + 999; // all speakers must have a column "id"
    async function updateData() {
      
      //const startingData = [...data]; // FAILS BECAUSE NOT DEEP COPY
      const startingData = data.map(function(rec) {
        return {...rec};
      });
      try {
        setData(function (oriState) {
          const dataRecord = oriState.find((rec) => rec.id === id);
          for (const [key, value] of Object.entries(updateObject)) {
            dataRecord[key] = value === undefined ? dataRecord[key] : value;
          }
          return oriState.map((rec) => (rec.id === id ? dataRecord : rec));
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await axios.put(`${url}/${id}`, {
          ...updateObject,
        });
      } catch (e) {
        setData(startingData);
        const errorString = formatErrorString(e, url);
        errorNotificationFn?.(errorString);
      }
    }

    if (data.find((rec) => rec.id === id)) {
      updateData();
    } else {
      const errorString = `No data record found for id ${id}`;
      errorNotificationFn?.(errorString);
    }
  }
  function deleteRecord(id) {
    async function deleteData() {
      try {
        await axios.delete(`${url}/${id}`);
        setData(function (oriState) {
          return oriState.filter((rec) => rec.id != id);
        });
      } catch (e) {
        const errorString = formatErrorString(e, url);
        errorNotificationFn?.(errorString);
      }
    }
    if (data.find((rec) => rec.id === id)) {
      deleteData();
    } else {
      const errorString = `No data record found for id ${id}`;
      errorNotificationFn?.(errorString);
    }
  }

  return {
    data,
    loadingStatus,
    error,
    createRecord,
    updateRecord,
    deleteRecord,
  };
}

export default useGeneralizedCrudMethods;
