
import { useEffect, useState } from "react";
import {  Table } from "react-bootstrap";
import {consultarApi}from '../helpers/queris'
import ItemProducto from "./producto/ItemProducto";
import {Link} from 'react-router-dom'


const Administrador = () => {
  const [productos, setProductos] = useState([]);
useEffect(()=>{
// opcion 1
// cuando se termina la promesa se ejecuta el then
consultarApi().then((respuesta)=>{
  console.log(respuesta)
  setProductos(respuesta)
})



// opcion 2
// const consultarPrueba= async ()=>{
//   const prueba=  await consultarApi()
//   console.log(prueba)
// }
// consultarPrueba()

  
}, [])
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to='/administrar/crear'>
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
       {
        productos.map((producto)=> <ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto> )
       }
         
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
