import React from "react";

export default function About() {
  return (
    <section className="projects-section" id="projects">
      <h1 className="section-title">
        Recent <span>Projects</span>
      </h1>
      <div className="project-horiseon">
        <h1>Project 1</h1>
        <h2>Animl.</h2>
        <p>
          This project was undertaken as a group collaboration, designed for
          animal lovers!
        </p>
        <a
          className="project-img1"
          href="https://alastairhafield.github.io/Animl-Project/home.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("./assets/img/Animal.png")} alt="img" />
        </a>
      </div>
      <div className="projects-container2">
        <div className="project-studyguide">
          <h1>Project 2:</h1>

          <h2>Studdy Buddy!</h2>
          <p>
            Studdy Buddy is a student hub for students to share coding problmes
            and solutions while also being able to connect to tutors and other
            students.
          </p>
          <a
            className="project-img2"
            href="https://studdybuddy.herokuapp.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("./assets/img/studdyBuddy.png")} alt="img" />
          </a>
        </div>
        <div className="project-studyguide">
          <h1>Project 2:</h1>

          <h2>Note Taker!</h2>
          <p>
            Note Taker is an application for you to add, edit or delete any
            notes you see fit. Please try this out to help you keep track of
            your day to day tasks!
          </p>
          <a
            className="project-img2"
            href="https://notetakeralastair.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("./assets/img/noteTaker.png")} alt="img" />
          </a>
        </div>
        <div className="project-studyguide">
          <h1>Project 3:</h1>

          <h2>J.A.T.E!</h2>
          <p>
            A Progressive Web Application. J.A.T.E is a text editor with local
            install!
          </p>
          <a
            className="project-img3"
            href="https://pwa-alastair.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("./assets/img/jate.png")} alt="img" />
          </a>
        </div>
        <div className="project-studyguide">
          <h1>Project 3:</h1>

          <h2>Daily Planner!</h2>
          <p>
            This is a daily planner that allows you to add tasks to your work
            day, it will also save your tasks to local storage and change the
            colour of the task depending on the time of day.
          </p>
          <a
            className="project-img3"
            href="https://alastairhafield.github.io/DailyPlanner-AlastairHatfield/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("./assets/img/dailyPlanner.png")} alt="img" />
          </a>
        </div>
      </div>
    </section>
  );
}
