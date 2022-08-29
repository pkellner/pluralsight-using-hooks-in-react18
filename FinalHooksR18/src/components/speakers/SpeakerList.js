import React, { useCallback, useContext, useEffect, useState } from "react";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../../hooks/useSpeakerSortAndFilter";
import SpeakerMenu from "./SpeakerMenu";
import SpeakerLine from "./SpeakerLine";
import axios from "axios";

function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    
    async function getIt() {
      setItems(await getItems());
    }
    getIt();
    
    console.log("list: updating items"); // this called when not useCallback below
  }, [getItems]);
  return (
    <div>
      {items.map(item => <div key={item.id}>{item.id}</div>)}
    </div>
  );
}

const SpeakerList = () => {
  // const { data: speakerList, loadingStatus } = useContext(
  //   SpeakersDataContext
  // );

  //if (loadingStatus === "hasErrored") return <div>Errored on load</div>;
  
  const getItems = async () => {
    console.log("getItems called")
    const results = await axios.get("/api/speakers/");
    return results.data;
  };
  
  console.log("SpeakerList rendered")

  return (
    <>
      {/*<div className={darkTheme ? "theme-dark" : "theme-light"}>*/}
      {/*<SpeakerMenu />*/}
      
      <div className="container">
       
        <div className="row g-3">
  
          {/*<List getItems={getItems} />*/}
          <List getItems={useCallback(getItems,[])} />
         
          {/*{speakerListFiltered.map((speakerRec) => {*/}
          {/*  return (*/}
          {/*    <SpeakerLine*/}
          {/*      key={speakerRec.id}*/}
          {/*      speakerRec={speakerRec}*/}
          {/*    />*/}
          {/*  );*/}
          {/*})}*/}
          </div>
        </div>
      {/*</div>*/}
    </>
  );
};

export default SpeakerList;
