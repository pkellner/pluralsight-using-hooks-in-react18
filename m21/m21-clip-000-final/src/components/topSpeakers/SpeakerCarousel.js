import SpeakerDetailRecord from "./SpeakerDetailRecord";

export default function SpeakerCarousel({
  speakers,
  setSpeakers,
  currentSlide,
  setCurrentSlide,
}) {
  const topSpeakers = speakers.filter((s) =>
    [1269, 187, 1124, 10803, 8367].includes(s.id),
  );

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
            <SpeakerDetailRecord
              speakerRec={topSpeakers[currentSlide]}
              setSpeakers={setSpeakers}
            />
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
