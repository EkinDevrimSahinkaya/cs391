import {
  Card,
  ListGroup,
  ListGroupItem,
  CardImg,
  CardBody,
  CardTitle,
  CardLink,
  CardText,
} from "reactstrap";
import React from "react";
import "./MyCard.css";

const MyCard = ({
  name,
  img,
  desc,
  genre,
  publisher,
  price,
  id,
  deleteGame,
}) => {
  console.log(img);
  return (
    <div sm="8" lg="4">
      <Card>
        <CardImg variant="top" src={img} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{desc}</CardText>
        </CardBody>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Genre : {genre}</ListGroupItem>
          <ListGroupItem>Publisher : {publisher}</ListGroupItem>
          <ListGroupItem>Price: {price}</ListGroupItem>
        </ListGroup>
        <CardBody>
          <CardLink onClick={() => deleteGame(id)}>Delete</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};
export default MyCard;
