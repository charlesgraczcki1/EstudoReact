import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import City from "./assets/City.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

function App() {
  const [count, setCount] = useState(0);

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
        </div>
      </div>
    </>
  );
}

export default App;
