import SpeakerDetail from "./SpeakerDetail";
import SpeakerMenu from "./SpeakerMenu";
import { speakerList } from "../../../speakersData";

const Speakers = () => {
  const darkTheme = false;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          {speakerList.map((speakerRec) => {
            return (
              <SpeakerDetail
                key={speakerRec.id}
                speakerRec={speakerRec}
                showDetails={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
