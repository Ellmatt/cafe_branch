import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { obtenerProductoApi, consultarApi } from "../../helpers/queris";

const CardProducto = (props) => {
  return (
    <Card className="my-4">
      <Card.Img variant="top" src={props.imagen} className="img-fluid" />
      <Card.Body>
        <Card.Title>{props.nombreProducto}</Card.Title>
        <Card.Subtitle>{props.categoria}</Card.Subtitle>
        <Card.Text>Precio: ${props.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          className="btn btn-danger me-2" to={`/detalle-producto/${props.id}`}
        >
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
