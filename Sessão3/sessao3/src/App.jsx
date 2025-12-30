import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import City from "./assets/City.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditioonalRender from "./components/ConditioonalRender";
import ShowUserName from "./components/ShowUserName";

function App() {
  const [count, setCount] = useState(0);
  const mosquito = " zika";
  const [userName] = useState("zoka");
  const [rua] = useState("zuka");
  return (
    <>
      <title>Sessão 3</title>
      <div>
        {/*Imagem em public*/}
        <div>
          <h1>Start</h1>
          <img src="/img1.jpg" alt="paisagem" />
        </div>
        <div>
          {/*Imagem em public*/}
          <img src={City} alt="cidade" />
          <ManageData />
          <ListRender />
          <ConditioonalRender />
          <ShowUserName name={userName} mordidopor={mosquito} rua={rua} />
        </div>
      </div>
    </>
  );
}

export default App;
