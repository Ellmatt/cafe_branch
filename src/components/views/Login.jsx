import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (datos) => {
    console.log(datos);
    console.log("desde nuestra funcion submit");
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
