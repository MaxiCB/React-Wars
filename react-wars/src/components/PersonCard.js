import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const PersonCard = props => {

    return (
        <div>
            <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
                <CardText>Height: {props.height}<br/> Mass: {props.mass}<br/> 
                Hair Color: {props.hair_color}<br/> Skin Color: {props.skin_color}<br/> 
                Eye Color: {props.eye_color}<br/> Gender: {props.gender}<br/></CardText>
                <Button className="cardButton">View More</Button>
            </CardBody>
          </Card>
        </div>
    )
  }

  export default PersonCard;