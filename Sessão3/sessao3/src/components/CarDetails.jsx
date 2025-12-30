const CarDetails = ({ brand, km, color, bateu }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca:{brand}</li>
        <li>KM:{km}</li>
        <li>Cor:{color}</li>
        {bateu && <p>Este carro já sofreu ao menos uma colisão.</p>}
      </ul>
    </div>
  );
};

export default CarDetails;
