import { useState } from "react";
import "./App.css";
//components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/templateExpressions";
import MyComponent from "./components/Mycomponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
      </div>
    </>
  );
}

export default App;
