const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativando o evento");
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Ativando o evento")}>
          Click aqui também
        </button>
      </div>
    </div>
  );
};
export default Events;
