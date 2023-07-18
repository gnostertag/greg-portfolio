import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {};

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
            Greg
          </Link>
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
              <Button
                type="button"
                onClick={handleButtonClick}
                to="/projects"
                buttonStyle="btn--outline"
              >
                Projects
              </Button>
              <Button
                type="button"
                onClick={handleButtonClick}
                to="/experience"
                buttonStyle="btn--outline"
              >
                Experience
              </Button>
              <Button
                type="button"
                onClick={handleButtonClick}
                to="/contact"
                buttonStyle="btn--outline"
              >
                Contact
              </Button>
              <Button
                type="button"
                onClick={handleButtonClick}
                to="/"
                buttonStyle="btn--outline"
              >
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
