import React from 'react';

import { Link } from 'react-router-dom';
import { useScroll } from './hooks/useScroll';
// import PropTypes from 'prop-types';

const NavBar = () => {
  const { y, x, scrollDirection } = useScroll();
  const styles = {
    active: {
      visibility: 'visible',
      transition: 'all 0.5s',
    },
    hidden: {
      visibility: 'hidden',
      transition: 'all 0.5s',
      transform: 'translateY(-100%)',
    },
  };

  const navStatus = () => {
    if (scrollDirection === 'down') {
      return styles.active;
    } else if (scrollDirection === undefined) {
      return styles.active;
    } else {
      return styles.hidden;
    }
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark"
        style={navStatus()}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
