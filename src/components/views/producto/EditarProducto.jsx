import { Form, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form'

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: '',
      imagen: "",
      categoria: "",
    },
  });
  const onSubmit = (datos) => {
    console.log(datos);
    console.log("desde nuestra funcion submit");
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" 
           {...register("nombreProducto", {
            required: "Este dato es obligatorio",
            minLength:{
              value:2,
              message:'Debe ingresar como minimo 2 caracteres'
            },
            maxLength:{
              value:20,
              message:'Debe ingresar como maximo 20 caracteres'
            }
          })}
          />
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" 
          {...register('precio',{
            required:'El precio es un valor requerido',
            min:{
              value:1,
              message:'El precio como minimo debe ser de $1'
            },
            max:{
              value: 10000,
              message:'el precio como maximo debe ser de $10000'
            }
          })}/>
          <Form.Text className="text-danger">{errors.precio?.message}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register('imagen', {
              required:'La URL de la imagen es obligatoria',
              pattern:{
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message:'Debe ingresar una URL valida'
              },
            

            })}
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {...register('categoria', {
            required:' Debe seleccionar una categoria'
          })}>
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
