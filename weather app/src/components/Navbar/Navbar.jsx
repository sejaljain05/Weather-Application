import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a
      className="navbar-brand"
      href="#"
    >
      Weather Application
    </a>
    <button
      aria-controls="navbarScroll"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarScroll"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse"
      id="navbarScroll"
    >
      <ul
        className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
        style={{
          '--bs-scroll-height': '100px'
        }}
      >

        <li className="nav-item dropdown">
          <a
            aria-expanded="false"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            id="navbarScrollingDropdown"
            role="button"
          >
            Temperature
          </a>
          <ul
            aria-labelledby="navbarScrollingDropdown"
            className="dropdown-menu"
          >
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Farenheit (F)
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Celsius (C)
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input
          aria-label="Search"
          className="form-control me-2"
          placeholder="Search City "
          type="search"
        />
        <button
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
  )
  ;
};

export default Navbar;
