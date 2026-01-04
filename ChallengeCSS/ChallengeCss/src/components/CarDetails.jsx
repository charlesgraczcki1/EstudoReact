import "./CarDetails.css";
const CarDetails = ({ brand, color, km, unicoDono, estadoDeUso }) => {
  return (
    <div className="main">
      <p className="detalhes">
        Este carro é da marca ,{brand} ,possui a cor: {color} e já viajou : {km}{" "}
        Kilometros.
        <br />
      </p>
      {unicoDono ? (
        <p className="detalhes">
          Este carro é Unico Dono , e esta com um Estado de uso de
          <br />
          <span style={{ color: "#cafe33" }}>{estadoDeUso}!</span>
        </p>
      ) : (
        <p className="detalhes">
          Este carro não é Unico Dono Mas esta com o Estado de uso de
          <br />
          <span style={{ color: "#cafe33" }}>{estadoDeUso}!</span>
        </p>
      )}
    </div>
  );
};

export default CarDetails;
