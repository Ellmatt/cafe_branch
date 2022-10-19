import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { consultarApi } from "../helpers/queris";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [producto, setProducto] = useState([]);
 
  useEffect(() => {
    consultarApi().then((respuesta) => {
      console.log(respuesta);
      setProducto(respuesta);
    });
  }, [])
  
  return (
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
        {/* aqui van las columnas */}
        {producto.map((objeto, id) => (
          <CardProducto
            key={id}
            nombreProducto={objeto.nombreProducto}
            precio={objeto.precio}
            imagen={objeto.imagen}
            categoria={objeto.categoria}
          ></CardProducto>
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
