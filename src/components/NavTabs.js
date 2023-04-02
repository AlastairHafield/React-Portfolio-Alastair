import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              <h1>
                <span>A</span>lastair <span>H</span>atfield
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="bar"></div>
            <ul>
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
  );
}

export default NavTabs;
