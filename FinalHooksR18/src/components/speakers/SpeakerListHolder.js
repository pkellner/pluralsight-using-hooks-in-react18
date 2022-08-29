import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SpeakerList from "./SpeakerList";

function SpeakerListHolder() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerList darkTheme={darkTheme} />
    </div>
  );
}

export default SpeakerListHolder;
