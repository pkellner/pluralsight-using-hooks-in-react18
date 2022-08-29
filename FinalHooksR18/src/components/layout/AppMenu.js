import React, { useContext } from "react";
import { AppRouterContext } from "../../contexts/AppRouterContext";

export default function AppMenu({ toggleTheme }) {
  const { setRoute } = useContext(AppRouterContext);

  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills gap-3">
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
          <div className="btn-group">
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
          </div>
        </li>
      </ul>
    </header>
  );
}
