// top-speakers.js  (only the arrow / centering tweaks—no other behaviour changes)
import { useEffect, useState } from "react";
import axios from "axios";
import FavoriteSpeakerToggle from "../speakers/FavoriteSpeakerToggle";

export default function TopSpeakers() {
  const darkTheme = false;
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataAsync() {
      try {
        setLoading(true);
        const results = await axios.get("/api/speakers");
        setSpeakers(results.data);
      } finally {
        setLoading(false);
      }
    }
    getDataAsync();
  }, []);

  if (loading) return <div>Loading...</div>;

  /* ---------------------------------------------------- */
  function SpeakerDetailRecord({ speakerRec }) {
    return (
      <div className="card border-0 carousel-speaker-card">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={speakerRec.imageUrl}
              alt="speaker"
              width={200}
              height={200}
              className="img-fluid rounded-start speaker-image"
            />
          </div>

          <div className="col-8 d-flex flex-column flex-nowrap">
            <div className="card-body">
              <div className="speaker-action d-flex">
                <div className="favoriteToggleWrapper">
                  <FavoriteSpeakerToggle speakerRec={speakerRec} />
                </div>
              </div>
              <h4 className="card-title">
                {speakerRec.firstName} {speakerRec.lastName}
              </h4>
              <p className="card-text">{speakerRec.bio}</p>
            </div>

            <div className="card-footer text-muted d-flex flex-wrap justify-content-between align-items-center">
              {speakerRec.company?.length ? (
                <small>
                  <strong>Company:</strong> {speakerRec.company}
                </small>
              ) : null}

              {speakerRec.twitterHandle?.length ? (
                <small>
                  <strong>Twitter:</strong> {speakerRec.twitterHandle}
                </small>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------- */
  function SpeakerCarousel({ speakers }) {
    const topSpeakers = speakers.filter((s) =>
      [1269, 187, 1124, 10803, 8367].includes(s.id)
    );
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrevious() {
      if (currentSlide > 0) setCurrentSlide((p) => p - 1);
    }
    function handleNext() {
      if (currentSlide < topSpeakers.length - 1) setCurrentSlide((p) => p + 1);
    }
    function goToSlide(index) {
      setCurrentSlide(index);
    }

    if (!topSpeakers.length) return null;
    const isFirst = currentSlide === 0;
    const isLast = currentSlide === topSpeakers.length - 1;

    return (
      <div className="speakers-carousel-wrapper position-relative">
        <div className="carousel-container">
          <div className="carousel-slide-wrapper">
            <div className="carousel-slide-content">
              <SpeakerDetailRecord speakerRec={topSpeakers[currentSlide]} />
            </div>
          </div>

          <button
            className={`carousel-nav-btn carousel-nav-prev ${
              isFirst ? "disabled" : ""
            }`}
            type="button"
            onClick={handlePrevious}
            disabled={isFirst}
          >
            <span className="carousel-nav-icon carousel-arrow-left" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className={`carousel-nav-btn carousel-nav-next ${
              isLast ? "disabled" : ""
            }`}
            type="button"
            onClick={handleNext}
            disabled={isLast}
          >
            <span className="carousel-nav-icon carousel-arrow-right" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="carousel-indicators-custom">
          {topSpeakers.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={idx === currentSlide ? "active" : ""}
              aria-current={idx === currentSlide}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerCarousel speakers={speakers} />
    </div>
  );
}
