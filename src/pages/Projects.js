import React from 'react';
import { Card, CardText, Button, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function Projects() {
  return (
    <>
      <div className='project-image'>Projects
      <Card style={{ width: '18rem' }}>
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
    </>
  );
}

export default Projects;
