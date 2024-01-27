import { Container } from "react-bootstrap";
import FormularioPacientes from "./components/FormularioPacientes";

function App() {
  return <Container className="main my-5">
    <h1 className="text-secondary mb-5 text-center">Administrador pacientes de veterinaria</h1>
    <FormularioPacientes></FormularioPacientes>
  </Container>;
}

export default App;
