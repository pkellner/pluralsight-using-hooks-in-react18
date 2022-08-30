import React, { useContext } from "react";
import { AppRouterContext } from "../../contexts/AppRouterContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function AppMenu() {
  const { setRoute } = useContext(AppRouterContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="d-flex justify-content-center py-3">
      <div className="container">
        <ul className="nav nav-pills gap-3 align-items-center">
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
            {/* <div className="btn-group">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="radio1"
                autoComplete="off"
                defaultChecked={true}
                onClick={() => {
                  toggleTheme();
                }}
              />
              <label className="btn btn-outline-primary" htmlFor="radio1">
                Light
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="radio2"
                autoComplete="off"
                onClick={() => {
                  toggleTheme();
                }}
              />
              <label className="btn btn-outline-primary" htmlFor="radio2">
                Dark
              </label>
            </div> */}
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
