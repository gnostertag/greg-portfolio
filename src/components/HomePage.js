import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HomePage.css";
import video from "../assets/video-1.mp4";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <video src={video} autoPlay loop muted type="video/mp4" />
        <h1>Welcome</h1>
        <div className="home-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          ></Button>
        </div>
      </div>
    </>
  );
}


export default HomePage;
