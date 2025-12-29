import { useState } from "react";

const ConditioonalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("lucas");
  return (
    <div>
      <h1>isso será exibido?</h1>
      {x && <p>se x for true sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>If ternário</h1>
      {name === "João" ? (
        <div>
          <p>Agora você é um João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("João")}>vire um joão</button>
    </div>
  );
};

export default ConditioonalRender;
