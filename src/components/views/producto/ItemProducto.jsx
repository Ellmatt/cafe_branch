
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
const ItemProducto = (props) => {


  return (
    <tr>
      <td>{props.producto.id}</td>
      <td>{props.producto.nombreProducto}</td>
      <td>${props.producto.precio}</td>
      <td>{props.producto.imagen}</td>
      <td>{props.producto.categoria}</td>
      <td>
      <Link className="btn btn-warning" to='/administrar/editar'>
          editar
        </Link>
        <Button className="btn btn-danger" to='/administrar/borrar'>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
