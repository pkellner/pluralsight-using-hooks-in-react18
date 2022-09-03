export default function AppMenu() {
  return (
    <header className="d-flex justify-content-center py-3">
      <div className="container">
        <ul className="nav nav-pills gap-3 align-items-center">
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
                window.location.href = "/speakerlist";
              }}
              className="nav-link"
            >
              Speaker List
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
          <li>
            <input
              type="checkbox"
              className="themeToggleCheckbox"
              autoComplete="off"
              id="themeToggle"
              defaultChecked={false}
              onClick={() => {
                //
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
