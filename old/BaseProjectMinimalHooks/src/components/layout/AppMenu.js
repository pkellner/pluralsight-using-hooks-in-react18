import React from "react";

export default function AppMenu() {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills gap-3">
        <li className="nav-item">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="nav-link"
          >
            Speakers
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => {
              window.location.href = "/about";
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
