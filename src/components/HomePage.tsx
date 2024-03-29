import React from "react";
import "../App.css";
import "./HomePage.css";
import video from "../assets/fire.mp4";
import { useEffect, useState } from "react";
import mobileImage from "../assets/forest-background.jpg";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="home-container">
        {isMobile ? (
          <img src={mobileImage} alt="Mobile" />
        ) : (
          <video src={video} autoPlay loop muted />
        )}
        <h1 className="home-text">Welcome</h1>
      </div>
    </>
  );
}

export default HomePage;
