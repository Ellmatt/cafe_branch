import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { crearUsuarioAPI } from "../helpers/queris";
import Swal from "sweetalert2";const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      
    },
  });
  // inicializar a useNavigate
  // const navegacion = useNavigate();


  const onSubmit = (datos) => {
    // los datos ya estan validados
    console.log(datos);
    // enviar lo datos a la api
    // .then es para dar todo el tiempo del mundo y lugo de tener la respuesta hacer el codigo entre ()
    // en el parametro se puede usar cualquier nombre pero para mayor presicion usar la misma palabra del return de queris
    // crearUsuarioAPI(datos).then((respuesta) => {
    //   if (respuesta.status === 201) {
    //     // el producto se creo
    //     Swal.fire(
    //       "Inicio de sesion exitoso",
    //       "Has iniciado sesion correctamente",
    //       "success"
    //     );
       
    //     // redireccionar
    //     navegacion('/')
    //   } else {
    //     // mostrar error al usuario
    //     Swal.fire("Ocurrio un error", "Vuelva a intentarlo más tarde", "error");
    //   }
    // });
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Login</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: pepito@gmail.com"
            {...register("email", {
              required: "Este dato es obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: "Usuario incorrecto",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: pepito123?"
            {...register("password", {
              required: "La password es incorrecta",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "Contraseña incorrecta",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </section>
  );
};

export default Login;
