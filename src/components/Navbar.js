import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Greg <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              ></Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              ></Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experience"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              ></Link>
            </li>
          </ul>
          {button && (
            <>
              <Button to="/projects" buttonStyle="btn--outline">
                Projects
              </Button>
              <Button to="/experience" buttonStyle="btn--outline">
                Experience
              </Button>
              <Button to="/contact" buttonStyle="btn--outline">
                Contact
              </Button>
              <Button to="/" buttonStyle="btn--outline">
                Home
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
