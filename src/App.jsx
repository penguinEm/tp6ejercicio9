import { Container } from "react-bootstrap";
import FormularioPacientes from "./components/FormularioPacientes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="main my-5">
        <h1 className="text-secondary mb-5 text-center">
          Administrador pacientes de veterinaria
        </h1>
        <FormularioPacientes></FormularioPacientes>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
