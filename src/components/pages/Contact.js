import React from "react";

export default function Blog() {
  return (
    <section>
      <div class="container proficiency-list">
        <a href="./assets/files/Alastair Hatfield CV.pdf" download>
          <h1 class="section-title">My Resume</h1>
        </a>
      </div>
      <div class="proficiencies-container">
        <div class="proficiency">
          <h5 class="section-title">Front-End</h5>
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
        <div class="proficiency">
          <h5 class="section-title">Back-End</h5>
          <ol>
            <li>APIs</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Model View Controller</li>
            <li>REST</li>
            <li>Progressive Web Applications</li>
          </ol>
        </div>
        <div class="proficiency">
          <h5 class="section-title">Dev Tool</h5>
          <ol>
            <li>Git</li>
            <li>npm</li>
            <li>Jest</li>
            <li>Webpack</li>
          </ol>
        </div>
        <div class="proficiency">
          <h5 class="section-title">Database</h5>
          <ol>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
