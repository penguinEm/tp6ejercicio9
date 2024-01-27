import CardsPaciente from "./CardPaciente";

const ContenedorCards = () => {
  return (
    <section className="mb-5 d-flex justify-content-around row mt-5">
      <CardsPaciente></CardsPaciente>
      <CardsPaciente></CardsPaciente>
      <CardsPaciente></CardsPaciente>
      <CardsPaciente></CardsPaciente>
    </section>
  );
};

export default ContenedorCards;
