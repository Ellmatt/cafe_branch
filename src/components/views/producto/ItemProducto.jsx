import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarApi } from "../../helpers/queris";

const ItemProducto = (props) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "Esta seguro de eliminar este producto?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
      cancelButtonText: "Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // realizar la consulta a la api
        borrarProductoAPI(props.producto._id).then((respuesta) => {
          if (respuesta.status === 200) {
            // actualizar el state productos o la tabla
            consultarApi().then((respuesta) => {
              props.setProductos(respuesta);
            });
            Swal.fire("Borrado!", "Su producto a sido borrado!", "success");
          } else {
            Swal.fire(
              "Se produjo un error",
              "intente realizar esta operacion en otro momento!",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{props.producto._id}</td>
      <td>{props.producto.nombreProducto}</td>
      <td>${props.producto.precio}</td>
      <td>{props.producto.imagen}</td>
      <td>{props.producto.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${props.producto._id}`}>
          Editar
        </Link>
        <Button className="btn btn-danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
