import React from "react";
import { Button, Card } from "react-bootstrap";
import { consultarApi } from "../../helpers/queris";

const CardProducto = () => {
  // consultarApi().then((respuesta)=>{
  //   console.log(respuesta)
   
  // })
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>Brownie</Card.Title>
        <Card.Text>Precio: $400</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn btn-danger me-2">Ver más</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
