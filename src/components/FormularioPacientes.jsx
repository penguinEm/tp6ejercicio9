import { Button, Form } from "react-bootstrap";
import ContenedorCards from "./ContenedorCards";

const FormularioPacientes = () => {
  return (
    <>
      <Form className="border px-5 py-5 rounded-1 bg-body-tertiary border-danger">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <Form.Label>Nombre de la mascota:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Roco"
              className="color-inputs anchoControls"
            />
          </div>
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <Form.Label>Nombre del dueño:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Juan"
              className="color-inputs anchoControls"
            />
          </div>
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <Form.Label>Fecha:</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              className="color-inputs anchoInputsTime"
            />
            <Form.Label>Hora:</Form.Label>
            <Form.Control
              type="time"
              placeholder="name@example.com"
              className="color-inputs w-auto"
            />
          </div>
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <Form.Label>Sintomas</Form.Label>
            <Form.Control
              type="text"
              placeholder="describir sintomas"
              className="color-inputs anchoControls "
            />
          </div>
        </Form.Group>
        <div className="text-end mt-5">
          <Button variant="outline-secondary">Enviar</Button>
        </div>
      </Form>
      <ContenedorCards></ContenedorCards>
    </>
  );
};

export default FormularioPacientes;
