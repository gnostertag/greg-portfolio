import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Image from "../assets/TicTacToe image.png";
import Gtai from "../assets/GTAI.png";
import Treasure from "../assets/treasure-hunt-screenshot.png"
function Projects() {
  return (
    <>
      <div className="project-image">
        <Card
          style={{
            width: "18rem",
            
          }}
        >
          <img alt="Sample" src={Image} className="tic-image" />
          <CardBody>
            <CardTitle tag="h5">Tic-Tac-Toe</CardTitle>

            <CardText>Tic-Tac-Toe game created using React.</CardText>
            <Button
              href={"https://tic-tac-toe-knk7.onrender.com"}
              className="button-3"
            >
              See Project
            </Button>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src={Gtai} className="tic-image" />
          <CardBody>
            <CardTitle tag="h5">Grand Theft A.I.</CardTitle>

            <CardText>
              Full-Stack car buying, selling, and stealing application created
              using React and Rails
            </CardText>
            <Button
              href={"https://gtai-frontend.onrender.com/"}
              className="button-3"
            >
              See Project
            </Button>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src={Treasure} className="tic-image" />
          <CardBody>
            <CardTitle tag="h5">Treasure Hunt</CardTitle>

            <CardText>
              Full-Stack car buying, selling, and stealing application created
              using React and Rails
            </CardText>
            <Button
              href={""}
              className="button-3"
            >
              See Project
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Projects;
