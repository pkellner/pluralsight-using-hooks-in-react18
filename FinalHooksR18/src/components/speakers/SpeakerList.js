import React, { useCallback, useContext, useEffect, useState } from "react";
import { SpeakersDataContext } from "../../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../../hooks/useSpeakerSortAndFilter";
import SpeakerMenu from "./SpeakerMenu";
import SpeakerLine from "./SpeakerLine";

function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
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
  
  const getItems = () => {
    console.log("getItems called")
    return [
      {
        "id": 5996,
        "firstName": "Craig",
        "lastName": "Berntson",
        "sat": true,
        "sun": true,
        "favorite": true,
        "bio": "Craig has a passion for community and helping other developers improve their skills. He writes the column \"Software Gardening\" in DotNet Curry Magazine and is the co-author of \"Continuous Integration in .NET\" available from Manning.",
        "company": "HealthEquity",
        "twitterHandle": "craigber",
        "userBioShort": "Speaker, author, architect, and engineer. Currently he's a Senior Software Engineer at HealthEquity.",
        "imageUrl": "/images/Speaker-5996.jpg",
        "email": "Craig.Berntson@codecamp.net"
      },
      {
        "id": 187,
        "firstName": "DaveRx",
        "lastName": "Nielsen",
        "sat": true,
        "sun": true,
        "favorite": false,
        "bio": "As Head of Ecosystem Programs, Dave uses emerging technologies and open source projects like Microservices, Serverless & Kubernetes to bring the magic of Redis to the broader community.",
        "company": "Intel",
        "twitterHandle": "davenielsen",
        "userBioShort": "I head up ecosystem programs at Redis Labs. I'm also the co-founder of CloudCamp. ",
        "imageUrl": "/images/Speaker-187.jpg",
        "email": "Dave.Nielsen@codecamp.net"
      },
      {
        "id": 1124,
        "firstName": "Douglas",
        "lastName": "Crockford456",
        "sat": true,
        "sun": false,
        "favorite": true,
        "bio": "Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.",
        "company": "PayPal",
        "twitterHandle": "",
        "userBioShort": "Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.",
        "imageUrl": "/images/Speaker-1124.jpg",
        "email": "Douglas.Crockford@codecamp.net"
      },
      {
        "id": 10803,
        "firstName": "Eugene",
        "lastName": "Chuvyrov",
        "sat": true,
        "sun": false,
        "favorite": false,
        "bio": "Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.",
        "company": "Microsoft",
        "twitterHandle": "EugeneChuvyrov",
        "userBioShort": "Cloud Architect at Microsoft focused on accelerating modern DevOps, Machine Learning and Blockchain.",
        "imageUrl": "/images/Speaker-10803.jpg",
        "email": "Eugene.Chuvyrov@codecamp.net"
      },
      {
        "id": 8367,
        "firstName": "Gayle Laakmann",
        "lastName": "McDowell",
        "sat": true,
        "sun": false,
        "favorite": false,
        "bio": "Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three best selling books.",
        "company": "CareerCup",
        "twitterHandle": "gayle",
        "userBioShort": "Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three books.",
        "imageUrl": "/images/Speaker-8367.jpg",
        "email": "Gayle Laakmann.McDowell@codecamp.net"
      },
      {
        "id": 18805,
        "firstName": "Mickey W.",
        "lastName": "Mantle",
        "sat": true,
        "sun": true,
        "favorite": false,
        "bio": "Mickey has been developing software systems and products for over 40 years, as a systems programmer, Tech Lead, Manager, VP Engineering, CTO, COO, and now CEO/CTO of his own company.",
        "company": "Wanderful, Inc.",
        "twitterHandle": "mwmantleCA",
        "userBioShort": "Mickey has been developing software products for over 40 years – in a variety of leadership roles.",
        "imageUrl": "/images/Speaker-18805.jpg",
        "email": "Mickey W..Mantle@codecamp.net"
      },
      {
        "id": 41808,
        "firstName": "Paul",
        "lastName": "Everitt",
        "sat": true,
        "sun": true,
        "favorite": false,
        "bio": "Paul is the PyCharm and WebStorm Developer Advocate at JetBrains. Before that, Paul was a partner at Agendaless Consulting and co-founder of Zope Corporation, taking the first open source application server through $14M of funding.",
        "company": "JetBrains, Inc.",
        "twitterHandle": "paulweveritt",
        "userBioShort": "Paul is the PyCharm and WebStorm Developer Advocate at JetBrains.",
        "imageUrl": "/images/Speaker-41808.jpg",
        "email": "Paul.Everitt@codecamp.net"
      },
      {
        "id": 1530,
        "firstName": "Tamara",
        "lastName": "Baker",
        "sat": false,
        "sun": true,
        "favorite": true,
        "company": "Code Camp",
        "twitterHandle": "tammybaker123",
        "userBioShort": "Tammy is a software development leader for over 20 years.",
        "bio": "Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at USA Tech, Cantaloupe Systems, E-Color, and Untangle Inc.",
        "imageUrl": "/images/Speaker-1530.jpg",
        "email": "Tamara.Baker@codecamp.net"
      }
    ]
  };

  //const speakerListFiltered = useSpeakerSortAndFilter(speakerList);
  
  console.log("SpeakerList rendered")

  return (
    <>
      {/*<div className={darkTheme ? "theme-dark" : "theme-light"}>*/}
      {/*<SpeakerMenu />*/}
      
      <div className="container">
       
        <div className="row g-3">
  
          <List getItems={getItems} />
          {/*<List getItems={useCallback(getItems,[])} />*/}
         
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
