import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function About() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <div className="container">
        <div id="content" className="content-wrapper">
          <div className="about">
            <h1 className="hTitle">About</h1>
            <div className="card border-0 p-3">
              <div className="card-body">
                <p className="card-text">
                  Silicon Valley Code Camp is put on by a dedicated group of
                  volunteers whose mission is to both provide the highest
                  quality content built around the topic of computer code, as
                  well as create an environment where shared knowledge is
                  paramount.
                  <br /> <br />
                  The volunteers not only include the organizers, but all the
                  speakers in Addition!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
