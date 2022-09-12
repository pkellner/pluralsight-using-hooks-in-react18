import React, { useContext } from "react";
import { SpeakersDataContext, SpeakersDataProvider } from "../src/contexts/SpeakersDataContext";
import { ThemeContext } from "../src/contexts/ThemeContext";
import SpeakerMenu from "../src/components/speakers/SpeakerMenu";
import { SpeakerMenuProvider } from "../src/contexts/SpeakerMenuContext";
import SpeakersList from "../src/components/speakers/SpeakersList";

const InsideComponent = () => {
  const { dataValueFromContext } = useContext(MyContext);
  return (
    <span>
      value: {dataValueFromContext}
    </span>
  );
};

export default function Speakers() {
  return (
    <div>
      <InsideComponent />
      {() => {
        const { dataValueFromContext } = useContext(MyContext);
        return (
          <span>
      value: {dataValueFromContext}
    </span>
        );
      }}
    </div>
  );
}
