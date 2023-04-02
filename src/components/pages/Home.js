import React from "react";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <div className="hero container">
          <div>
            <h1>
              Hello, <span></span>
            </h1>
            <h1>
              My Name is <span></span>
            </h1>
            <h1>
              Alastair <span></span>
            </h1>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
              <img src={require("./assets/img/meImg.jpeg")} alt="ImageOfMe" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">
              About <span>me</span>
            </h1>
            <h2>Full-Stack Developer</h2>
            <p>
              Hello, my name is Alastair Hatfield. <br />
              I'm currently training to become a full-time software developer, I
              have a great passion for anything software, electronic or
              mechanical. Ideally I would like to work in the automotive or
              gaming industry. My strengths include HTML,CSS and Javascript. Fun
              Fact: I have 15 years in the automotive industry as a vehicle
              technician.
              <br />
              Please do not hesitate to contact me, I'm always friendly and
              happy to help. You can find my contact details by clicking contact
              in the Nav bar!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
