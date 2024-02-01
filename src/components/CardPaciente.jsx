//3- Desde CardPaciente.jsx
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsPaciente = ({ paciente, borrarPaciente, nombrePaciente }) => {
  return (
    <Card className="my-3 px-0 shadow" style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title>Mascota: {paciente.nombre}</Card.Title>
        <Card.Subtitle className="text-secondary">
          Dueño: {paciente.nombreDuenio}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div className="justify-content-between my-3">
          <Card.Text>Fecha: {paciente.fecha}</Card.Text>
          <Card.Text>Hora: {paciente.hora}</Card.Text>
          <Card.Text>Sintomas: {paciente.sintomas}</Card.Text>
        </div>
      </Card.Body>
      <Card.Footer className="text-end">
        <Button variant="danger" onClick={() => borrarPaciente(nombrePaciente)}>
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardsPaciente;
