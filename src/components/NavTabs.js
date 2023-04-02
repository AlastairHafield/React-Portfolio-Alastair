import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <section id="header">
      <div class="header container">
        <div class="nav-bar">
          <div class="brand">
            <a href="#hero">
              <h1>
                <span>A</span>lastair <span>H</span>atfield
              </h1>
            </a>
          </div>
          <div class="nav-list">
            <div class="bar"></div>
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={() => handlePageChange("Home")}
                  className={
                    currentPage === "Home" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={() => handlePageChange("Blog")}
                  className={
                    currentPage === "Blog" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    /* <section id="header"> 
    <div class="header container">
    <div class="nav-bar">
          <div class="brand">
            <a href="#hero">
              <h1><span>A</span>lastair <span>H</span>atfield</h1>
            </a>
          </div>
    <div class="nav-list">
    <div class="bar" >
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Blog")}
          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
    </div>
    </div>

    </section> */
  );
}

export default NavTabs;
