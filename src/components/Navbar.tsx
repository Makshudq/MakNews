import React from "react";

function Navbar({ setcatogaries }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand badge bg-primary fs-5">Mak NEWS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => setcatogaries("general")}>
                <a className="nav-link" aria-current="page">
                  General
                </a>
              </li>
              <li className="nav-item" onClick={() => setcatogaries("sports")}>
                <a className="nav-link">Sports</a>
              </li>
              <li
                className="nav-item"
                onClick={() => setcatogaries("business")}
              >
                <a className="nav-link">Business</a>
              </li>
              <li
                className="nav-item"
                onClick={() => setcatogaries("entertainment")}
              >
                <a className="nav-link">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setcatogaries("health")}>
                  Health
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
