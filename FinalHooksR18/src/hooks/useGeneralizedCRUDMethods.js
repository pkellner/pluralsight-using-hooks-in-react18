import { useEffect, useState } from "react";
import axios from "axios";

const LOADING_STATES = ["loading","errored","success"];

function useGeneralizedCrudMethods(url, errorNotificationFn) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loadingStatus, setLoadingStatus] = useState("");
  const [validateDate, setValidateDate] = useState(new Date());
  
  if (!url || url.length === 0) {
    throw "useGeneralizedCrudMethods no url passed in error";
  }
  
  function validate() {
    setValidateDate(new Date());
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
  }, [url, validateDate]);
  
  function createRecord(createObject) {
    async function addData() {
      try {
        await axios.post(url, createObject);
        setData(function (oriState) {
          return [...oriState, createObject];
        });
      } catch (e) {
        const errorString = formatErrorString(e, url);
        errorNotificationFn?.(errorString);
        validate();
      }
    }
    addData();
  }
  function updateRecord(updateObject) {
    const id = updateObject.id; // all speakers must have a column "id"
    async function updateData() {
      const startingData = [...data];
      try {
        //url += "xxx";
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
        validate();
      }
    }
    updateData();
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
        validate();
      }
    }
    deleteData();
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
