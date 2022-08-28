import React, { useContext } from "react";
import { AppRouterContext } from "../../contexts/AppRouterContext";

export default function AppMenu() {
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
      </ul>
    </header>
  );
}
