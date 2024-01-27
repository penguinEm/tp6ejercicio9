//2 -Desde Contenedor Cards.jsx

import CardsPaciente from "./CardPaciente";

const ContenedorCards = ({
  arrayPacientes,
  borrarPaciente,
  nombrePaciente,
}) => {
  return (
    <section className="mb-5 d-flex justify-content-around row mt-5">
      {arrayPacientes.map((paciente, indicePaciente) => (
        <CardsPaciente
          key={indicePaciente}
          paciente={paciente}
          borrarPaciente={borrarPaciente}
          nombrePaciente={paciente.nombre}
        ></CardsPaciente>
      ))}
    </section>
  );
};

export default ContenedorCards;
