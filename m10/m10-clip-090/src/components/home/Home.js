import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SpeakerCarousel from "./SpeakerCarousel";
import SignupForm from "./SignupForm";

export default function Home() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    async function getDataAsync() {
      try {
        setLoading(true);
        const response = await fetch("/api/speakers");
        const results = await response.json();
        setSpeakers(results);
      } finally {
        setLoading(false);
      }
    }
    getDataAsync();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerCarousel
        speakers={speakers}
        setSpeakers={setSpeakers}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <SignupForm />
    </div>
  );
}
