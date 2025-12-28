const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativando o evento");
  };
  const rendderalgumacoisa = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Renderizando aquilo</h1>;
    }
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
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("isso não deveria existir =p");
            }
          }}
        >
          Click aqui mais uma vez
        </button>
      </div>
      {rendderalgumacoisa(true)}
      {rendderalgumacoisa(false)}
    </div>
  );
};

export default Events;
