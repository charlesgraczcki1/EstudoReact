import { useState } from "react";

const ManageData = () => {
  let somedata = 10;

  console.log(somedata);
  const [number, setNumber] = useState(15);

  return (
    <div>
      <div>
        <p>valor:{somedata}</p>
        <button onClick={() => (somedata = 15)}>Mudar variavel</button>
        <p>valor:{number}</p>
      </div>
      <div>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
