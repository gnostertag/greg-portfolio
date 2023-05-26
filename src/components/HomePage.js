import React from "react";
import "../App.css";
import "./HomePage.css";
import video from "../assets/video-1.mp4";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <video src={video} autoPlay loop muted type="video/mp4" />
        <h1 className="home-text">Welcome</h1>
      </div>
    </>
  );
}

export default HomePage;
