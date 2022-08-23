import React, { useEffect, useState } from "react";

export default function MyComponent({length = 3}) {
  const speakers = [
    {
      id: 10808,
      firstName: "Antony",
      lastName: "Ross",
      imageUrl: "/images/Speaker-10808.jpg",
    },
    {
      id: 1725,
      firstName: "Brad",
      lastName: "Irby",
      imageUrl: "/images/Speaker-1725.jpg",
    },
    {
      id: 8590,
      firstName: "Chris",
      lastName: "Richardson",
      imageUrl: "/images/Speaker-8590.jpg",
    },
    {
      id: 5996,
      firstName: "Craig",
      lastName: "Berntson",
      imageUrl: "/images/Speaker-5996.jpg",
    },
    {
      id: 187,
      firstName: "Dave",
      lastName: "Nielsen",
      imageUrl: "/images/Speaker-187.jpg",
    },
  ];
  const [speakerListFiltered, setSpeakerListFiltered] = useState([]);
  
  useEffect(() => {
    async function fetchSpeakers() {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSpeakerListFiltered(speakers.slice(0,length));
    }
    fetchSpeakers();
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        {speakerListFiltered.map((speakerRec) => {
          return (
            <div className="col-12" key={speakerRec.id}>
              <img src={speakerRec.imageUrl} width="200" height="200" />
              
              <h4>
                {speakerRec.firstName} {speakerRec.lastName}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
