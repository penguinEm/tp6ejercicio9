import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsPaciente = () => {
  return (
    <Card className="my-3 px-0 shadow" style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title>Mascota: Firulais</Card.Title>
        <Card.Subtitle className="text-secondary">Dueño: Pepe</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div className="justify-content-between my-3">
          <Card.Text>Fecha</Card.Text>
          <Card.Text>Hora</Card.Text>
          <Card.Text>Sintomas</Card.Text>
        </div>
      </Card.Body>
      <Card.Footer className="text-end">
        <Button variant="danger">Borrar</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardsPaciente;
