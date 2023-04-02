import React from "react";

export default function Contact() {
  return (
    <section>
      <div className="container">
        <div className="container proficiency-list">
          <a href={require("./assets/files/Alastair Hatfield CV.pdf")} download>
            <h1 className="section-title">My Resume</h1>
          </a>
        </div>
        <div className="proficiencies-container">
          <div className="proficiency">
            <h5 className="section-title">Front-End</h5>
            <ol>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>version control/Git</li>
              <li>responsive design</li>
            </ol>
          </div>
          <div className="proficiency">
            <h5 className="section-title">Back-End</h5>
            <ol>
              <li>APIs</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Model View Controller</li>
              <li>REST</li>
              <li>Progressive Web Applications</li>
            </ol>
          </div>
          <div className="proficiency">
            <h5 className="section-title">Dev Tool</h5>
            <ol>
              <li>Git</li>
              <li>npm</li>
              <li>Jest</li>
              <li>Webpack</li>
            </ol>
          </div>
          <div className="proficiency">
            <h5 className="section-title">Database</h5>
            <ol>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
