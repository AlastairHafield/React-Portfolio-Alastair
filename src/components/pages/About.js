import React from "react";

export default function About() {
  return (
    <section class="projects-section" id="projects">
      <h1 class="section-title">
        Recent <span>Projects</span>
      </h1>
      <div class="project-horiseon">
        <h1>Project 1</h1>
        <h2>Animl.</h2>
        <p>
          This project was undertaken as a group collaboration, designed for
          animal lovers!
        </p>
        <a
          class="project-img1"
          href="https://alastairhafield.github.io/Animl-Project/home.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src="img/homepage.png" alt="img" />
        </a>
      </div>
      <div class="projects-container2">
        <div class="project-studyguide">
          <h1>Project 2:</h1>

          <h2>Studdy Buddy!</h2>
          <p>
            Studdy Buddy is a student hub for students to share coding problmes
            and solutions while also being able to connect to tutors and other
            students.
          </p>
          <a
            class="project-img2"
            href="https://studdybuddy.herokuapp.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/questions.jpg" alt="img" />
          </a>
        </div>
        <div class="project-studentbio">
          <h1>Project 3:</h1>
          <h2>Password Generator</h2>
          <p>Generate a secure password!</p>
          <a
            class="project-img3"
            href="https://alastairhafield.github.io/password-gen-alastair/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/passwordGen (1).jpg" alt="img" />
          </a>
        </div>
      </div>
    </section>
  );
}
