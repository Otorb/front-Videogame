import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
class Nav extends Component {
  render() {
    return (
      <div className="menu">
        <header className="header">
          <nav className="navbar">
            <Link
              className="nav-logo"
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              OttoGames.
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create your Videogame
                </Link>
              </li>
            </ul>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
