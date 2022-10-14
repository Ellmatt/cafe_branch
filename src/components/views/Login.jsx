import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Login</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="text" placeholder="Ej: pepito@gmail.com" />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Password*</Form.Label>
          <Form.Control type="number" placeholder="Ej: pepito123" />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
       
        <Button variant="primary" type="submit">
         Ingresar
        </Button>
      </Form>
    </section>
  );
};

export default Login;