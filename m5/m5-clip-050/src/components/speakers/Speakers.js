import { use, useEffect, useState } from "react";
import { speakerList } from "../../../speakersData";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { ThemeContext } from "../../App";

export default function Speakers() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const themeContext = isMounted ? use(ThemeContext) : null;
  const darkTheme = themeContext?.darkTheme || false;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakersList speakerList={speakerList} />
        </div>
      </div>
    </div>
  );
}
