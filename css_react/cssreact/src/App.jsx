import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mycomponent from "./components/mycomponent";
import Title from "./components/Title";
function App() {
  const n = 15;
  const [name] = useState("charles");
  const redTitle = false;
  return (
    <>
      <div>
        {/*CSS Global*/}
        <h1>React css </h1>
        {/*CSS de Component*/}
        <Mycomponent />
        <p>Este paragrafo é do app.jsx</p>
        {/*Inline CSS*/}
        <p
          style={{
            color: "silver",
            padding: "12px",
            borderTop: "1px solid gold",
            borderBottom: "2px solid gold",
          }}
        >
          Este elemento foi estilizado de forma inline, embora eu seja contra.
        </p>
        {/* CSS Inline dinâmico */}
        <h2 style={n < 10 ? { color: "silver" } : { color: "gold" }}>
          Css dinâmico
        </h2>
        <h2 style={n > 10 ? { color: "silver" } : { color: "gold" }}>
          Css dinâmico
        </h2>
        <h2
          style={
            name === "charles"
              ? { color: "#6F4E37", backgroundColor: "#cbfe33" }
              : null
          }
        >
          {name}
        </h2>
        {/* Classe dinâmica */}
        <h2 className={redTitle ? "red-title" : "title"}>
          {" "}
          Este titulo vai ter classe dinâmica
        </h2>
        {/* CSS Modules */}
        <Title />
      </div>
    </>
  );
}

export default App;
