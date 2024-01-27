//1 - Desde FormularioPacientes.jsx
import { Button, Form } from "react-bootstrap";
import ContenedorCards from "./ContenedorCards";
import { useState, useEffect } from "react";

const FormularioPacientes = () => {
  /* Variables globales -------------------- */
  const [paciente, setPaciente] = useState({
    nombre: "",
    nombreDuenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const arrayPacientesLocalStorage =
    JSON.parse(localStorage.getItem("pacientesKey")) || [];
  const [arrayPacientes, setArrayPacientes] = useState(
    arrayPacientesLocalStorage
  );

  /* Funciones ------------------------------ */

  const manejadorSubmit = (e) => {
    e.preventDefault();

    setArrayPacientes([...arrayPacientes, paciente]);
    setPaciente({
      nombre: "",
      nombreDuenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  const borrarPaciente = (nombrePaciente) => {
    const copiaArrayPaciente = arrayPacientes.filter(
      (paciente) => paciente.nombre !== nombrePaciente
    );
    setArrayPacientes(copiaArrayPaciente);
  };

  useEffect(() => {
    localStorage.setItem("pacientesKey", JSON.stringify(arrayPacientes));
  }, [arrayPacientes]);

  /* Maquetado Lógica extra ---------------------------- */
  return (
    <>
      <Form
        className="border px-5 py-5 rounded-1 bg-body-tertiary border-danger"
        onSubmit={manejadorSubmit}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <Form.Label>Nombre de la mascota:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Roco"
              className="color-inputs anchoControls"
              required
              maxLength={25}
              minLength={2}
              onChange={(e) =>
                setPaciente({ ...paciente, nombre: e.target.value })
              }
              value={paciente.nombre}
            />
          </div>
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <Form.Label>Nombre del dueño:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Juan"
              className="color-inputs anchoControls"
              minLength={3}
              maxLength={25}
              required
              onChange={(e) =>
                setPaciente({ ...paciente, nombreDuenio: e.target.value })
              }
              value={paciente.nombreDuenio}
            />
          </div>
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <Form.Label>Fecha:</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              className="color-inputs anchoInputsTime"
              required
              onChange={(e) =>
                setPaciente({ ...paciente, fecha: e.target.value })
              }
              value={paciente.fecha}
            />
            <Form.Label>Hora:</Form.Label>
            <Form.Control
              type="time"
              placeholder="name@example.com"
              className="color-inputs w-auto"
              required
              onChange={(e) =>
                setPaciente({ ...paciente, hora: e.target.value })
              }
              value={paciente.hora}
            />
          </div>
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <Form.Label>Sintomas</Form.Label>
            <Form.Control
              type="text"
              placeholder="describir sintomas"
              className="color-inputs anchoControls "
              minLength={4}
              maxLength={50}
              required
              onChange={(e) =>
                setPaciente({ ...paciente, sintomas: e.target.value })
              }
              value={paciente.sintomas}
            />
          </div>
        </Form.Group>
        <div className="text-end mt-5">
          <Button variant="outline-secondary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
      <ContenedorCards
        arrayPacientes={arrayPacientes}
        borrarPaciente={borrarPaciente}
      ></ContenedorCards>
    </>
  );
};

export default FormularioPacientes;
