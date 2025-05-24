import {
  startTransition,
  unstable_ViewTransition as ViewTransition,
  useEffect,
  useState,
} from "react";

function SubTitle() {
  return (
    <h2 className="display-4 text-warning fw-light fst-italic">
      Silicon Valley Code Camp Speakers
    </h2>
  );
}

function LoadingButton({ isLoading, onClick }) {
  return (
    <ViewTransition enter={"flip-in"} exit="flip-out">
      <div className="mt-5">
        <button
          onClick={() => {
            startTransition(() => {
              onClick();
            });
          }}
          disabled={isLoading}
          className="btn btn-primary btn-lg px-5 py-3 fw-bold text-uppercase rounded-pill shadow-lg button-content loading"
        >
          <span className="d-flex align-items-center justify-content-center">
            <i className="fas fa-spinner fa-spin me-2"></i>
            Loading...
          </span>
        </button>
      </div>
    </ViewTransition>
  );
}

function EnterButton({ isLoading, onClick }) {
  return (
    <ViewTransition enter={"flip-in"} exit="flip-out">
      <div className="mt-5">
        <button
          onClick={() => {
            startTransition(() => {
              onClick();
            });
          }}
          disabled={isLoading}
          className="btn btn-primary btn-lg px-5 py-3 fw-bold text-uppercase rounded-pill shadow-lg button-content enter"
        >
          <span className="d-flex align-items-center justify-content-center">
            Enter
            <i className="fas fa-arrow-right ms-2"></i>
          </span>
        </button>
      </div>
    </ViewTransition>
  );
}

export default function HomeEnterPage({
                                        onEnter,
                                        slideDirection,
                                        setSpeakers,
                                      }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSpeakers() {
      try {
        const response = await fetch("/api/speakers");
        const data = await response.json();
        startTransition(() => {
          setIsLoading(true);
          setSpeakers(data);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error loading speakers:", error);
      }
    }
    loadSpeakers();
  }, []);

  const vtEnter = slideDirection === "right" ? "slide-in" : "slide-out";
  const vtExit = slideDirection === "left" ? "slide-out" : "slide-in";

  function onClick() {
    startTransition(() => {
      onEnter();
    });
  }

  return (
    <ViewTransition enter={vtEnter} exit={vtExit}>
      <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-primary mb-4">
            Learn React&apos;s ViewTransition
          </h1>
          <SubTitle />

          {isLoading ? (
            <LoadingButton isLoading={isLoading} onClick={onClick} />
          ) : null}
          {!isLoading ? (
            <EnterButton isLoading={isLoading} onClick={onClick} />
          ) : null}

          <p className="text-muted mt-4 fs-6">
            Press enter to view the speaker list
          </p>
        </div>
      </div>
    </ViewTransition>
  );
}