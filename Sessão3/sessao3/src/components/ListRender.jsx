import { useState } from "react";

function ListRender() {
  const [list] = useState(["Charles", "Gabriel", "josias"]);
  const [users] = useState([
    { id: 1, name: "Charles", age: 28 },
    { id: 40028922, name: "Gabriel", age: 26 },
    { id: 999888124, name: "josias", age: 24 },
  ]);
  {
    /*Geralmente eu altero os nomes das variaveis, mas o josias me pegou de mais eu ri e deixei ali*/
  }

  return (
    <div>
      <ul>
        {/*em caso de emergencia não tem id naturalmente, não tem nem nenhuma opção melhor usa o indice do array, mas é ruim não faça, mas se precisar da pra usar, mas não use!*/}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}-{user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRender;
