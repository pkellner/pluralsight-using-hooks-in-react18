import React, { useContext } from "react";
import { AppRouterContext } from "../../contexts/AppRouterContext";

export default function AppMenu() {
  const { setRoute } = useContext(AppRouterContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <button
          onClick={() => {
            setRoute("/");
          }}
          className="nav-item nav-link active"
        >
          Speakers
        </button>
        <button
          onClick={() => {
            setRoute("/about");
          }}
          className="nav-item nav-link"
        >
          About
        </button>
      </div>
    </nav>
  );
}
