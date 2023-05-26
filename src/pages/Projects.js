import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Image from "../assets/TicTacToe image.png";
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
      </div>
    </>
  );
}

export default Projects;
