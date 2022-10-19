import React from "react";
import { Button, Card } from "react-bootstrap";

const CardProducto = (props) => {
  
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={props.imagen}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{props.nombreProducto}</Card.Title>
      <Card.Subtitle>{props.categoria}</Card.Subtitle>
        <Card.Text>Precio: ${props.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn btn-danger me-2">Ver más</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
