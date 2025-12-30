import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import City from "./assets/City.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditioonalRender from "./components/ConditioonalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragmento from "./components/Fragmento";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
function App() {
  const mosquito = " zika";
  const [userName] = useState("zoka");
  const [rua] = useState("zuka");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", bateu: false, km: 100000 },
    { id: 2, brand: "Bugatti", color: "lilás", bateu: false, km: 600000 },
    { id: 3, brand: "Mercedes", color: "cinza", bateu: true, km: 900000 },
    { id: 4, brand: "Renaut", color: "preto", bateu: true, km: 0.25 },
  ];
  function showMessage() {
    console.log("voce clicou!");
  }
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
          {/*Props*/}
          <ShowUserName name={userName} mordidopor={mosquito} rua={rua} />
          {/*Destructuring*/}
          <CarDetails brand="VW" km={0} color="vermelho" bateu={false} />
          {/*Reaproveitamento*/}
          <CarDetails brand="ford" color="azul" km={8001} bateu={false} />
          <CarDetails brand="fiat" color="verde" km={8002} bateu={true} />
          {/*Loop em array de objetos*/}
          {cars.map((car) => (
            <CarDetails
              key={car.id}
              brand={car.brand}
              color={car.color}
              km={car.km}
              bateu={car.bateu}
            />
          ))}
          {/*Fragments*/}
          <Fragmento propfragment="fogos de artificio não são legais em area urbana" />
          {/*children prop*/}
          <Container meuvalor="testando123">
            <p>E este é o conteudo</p>
          </Container>
          {/*executar a função*/}
          <ExecuteFunction myFunction={showMessage} />
        </div>
      </div>
    </>
  );
}

export default App;
