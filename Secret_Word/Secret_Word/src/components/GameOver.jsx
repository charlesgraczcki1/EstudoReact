import React from "react";
import "./GameOver.css";
const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>Fim de jogo , tente novamente.</h1>
      <button onClick={retry}>Começar o jogo</button>
    </div>
  );
};

export default GameOver;
