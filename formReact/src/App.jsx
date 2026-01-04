import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForms from "./assets/components/myforms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyForms />
    </>
  );
}

export default App;
