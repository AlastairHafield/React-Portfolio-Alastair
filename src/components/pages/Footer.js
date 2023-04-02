import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1>
            <span>A</span>lastair <span>H</span>atfield
          </h1>
        </div>
        <h2>Web Development</h2>
        <div className="social-icon">
          <div className="social-item">
            <a
              href="https://github.com/AlastairHafield"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./assets/img/GitHub-Logo.png")}
                alt="githubImage"
              />
            </a>
          </div>
          <div className="social-item">
            <a
              href=" https://linkedin.com/in/alastair-hatfield-02799524a "
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./assets/img/linked-in.png")}
                alt="linkedInImage"
              />
            </a>
          </div>
          <div className="social-item">
            <a
              href=" https://stackoverflow.com/users/20133849/dieagainali"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./assets/img/stackOverflow.png")}
                alt="stackOverflowImage"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
