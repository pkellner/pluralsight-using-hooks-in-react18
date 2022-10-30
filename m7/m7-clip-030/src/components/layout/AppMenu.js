import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function AppMenu() {
  const { setRoute } = {
    setRoute: (route) => {
      window.location.href = route;
    },
  };
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="d-flex justify-content-center py-3">
      <div className="container">
        <ul className="nav nav-pills gap-1 align-items-center justify-content-start">
          <li className="nav-item">
            <button
              onClick={() => {
                setRoute("/");
              }}
              className="nav-link"
            >
              Speakers
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                setRoute("/speakerlist");
              }}
              className="nav-link"
            >
              Speaker List
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                setRoute("/about");
              }}
              className="nav-item nav-link"
            >
              About
            </button>
          </li>
          <li>
            <input
              type="checkbox"
              className="themeToggleCheckbox"
              autoComplete="off"
              id="themeToggle"
              defaultChecked={false}
              onClick={() => {
                toggleTheme();
              }}
            />
            <label htmlFor="themeToggle" className="themeToggleCheckbox-label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
          </li>
        </ul>
      </div>
    </header>
  );
}
