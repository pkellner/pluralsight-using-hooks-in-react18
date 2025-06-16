import { useEffect, useState } from "react";
import axios from "axios";
import FavoriteSpeakerToggle from "../speakers/FavoriteSpeakerToggle";

export default function TopSpeakers() {
  const darkTheme = false;
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataAsync() {
      setLoading(true);
      const results = await axios.get("/api/speakers");
      setSpeakers(results.data);
      setLoading(false);
    }
    getDataAsync();
  }, []);

  if (loading) return <div>Loading...</div>;

  function SpeakerDetailRecord({ speakerRec }) {
    return (
      <div className="card border-0 carousel-speaker-card">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={speakerRec.imageUrl}
              alt="speaker image"
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
              {speakerRec?.company?.length > 0 ? (
                <small>
                  <strong>Company:</strong> {speakerRec.company}
                </small>
              ) : null}

              {speakerRec.twitterHandle.length > 0 ? (
                <small>
                  <strong>Twitter</strong>: {speakerRec.twitterHandle}
                </small>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SpeakerCarousel({ speakers }) {
    const topSpeakers = speakers.filter((speaker) =>
      [1269, 187, 1124, 10803, 8367].includes(speaker.id),
    );
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrevious() {
      if (currentSlide > 0) {
        setCurrentSlide(function (prev) {
          return prev - 1;
        });
      }
    }

    function handleNext() {
      if (currentSlide < topSpeakers.length - 1) {
        setCurrentSlide(function (prev) {
          return prev + 1;
        });
      }
    }

    function handleIndicatorClick(index) {
      setCurrentSlide(index);
    }

    if (topSpeakers.length === 0) return null;

    const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide === topSpeakers.length - 1;

    return (
      <div className="container">
        <div className="speakers-carousel-wrapper position-relative">
          <div className="carousel-container">
            <div className="carousel-slide-wrapper">
              <div className="d-flex justify-content-center">
                <div className="carousel-slide-content">
                  <SpeakerDetailRecord speakerRec={topSpeakers[currentSlide]} />
                </div>
              </div>
            </div>

            <button
              className={`carousel-nav-btn carousel-nav-prev ${
                isFirstSlide ? "disabled" : ""
              }`}
              type="button"
              onClick={handlePrevious}
              disabled={isFirstSlide}
            >
              <span className="carousel-nav-icon">&#8249;</span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className={`carousel-nav-btn carousel-nav-next ${
                isLastSlide ? "disabled" : ""
              }`}
              type="button"
              onClick={handleNext}
              disabled={isLastSlide}
            >
              <span className="carousel-nav-icon">&#8250;</span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="carousel-indicators-custom">
            {topSpeakers.map(function (speakerRec, index) {
              return (
                <button
                  key={speakerRec.id}
                  type="button"
                  onClick={function () {
                    handleIndicatorClick(index);
                  }}
                  className={index === currentSlide ? "active" : ""}
                  aria-current={index === currentSlide ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              );
            })}
          </div>
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
