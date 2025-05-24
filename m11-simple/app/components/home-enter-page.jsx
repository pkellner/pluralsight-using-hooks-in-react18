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

function LoadingButton() {
  return (
    <ViewTransition enter={"flip-in"} exit="flip-out">
      <span className="d-flex align-items-center">
        <i className="bi bi-arrow-right-circle-fill me-2"></i>
        Loading...
      </span>
    </ViewTransition>
  );
}
function EnterButton() {
  return (
    <ViewTransition enter={"flip-in"} exit="flip-out">
      <span className="d-flex align-items-center">
        <i className="bi bi-arrow-right-circle-fill me-2"></i>
        Enter
      </span>
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

  return (
    <ViewTransition enter={vtEnter} exit={vtExit}>
      <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-primary mb-4">
            Learn React&apos;s ViewTransition
          </h1>
          <SubTitle />

          <div className="mt-5">
            <button
              onClick={() => {
                startTransition(() => {
                  onEnter();
                });
              }}
              disabled={isLoading}
              className="btn btn-primary btn-lg px-5 py-3 fw-bold text-uppercase rounded-pill shadow-lg"
            >
              {isLoading ? <LoadingButton /> : null}
              {!isLoading ? <EnterButton /> : null}
            </button>
          </div>

          <p className="text-muted mt-4 fs-6">
            Press enter to view the speaker list
          </p>
        </div>
      </div>
    </ViewTransition>
  );
}
