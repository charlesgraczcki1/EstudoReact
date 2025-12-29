import { useState } from "react";

function ListRender() {
  const [list] = useState(["Charles", "Gabriel", "josias"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Charles", age: 28 },
    { id: 2, name: "Gabriel", age: 26 },
    { id: 3, name: "josias", age: 24 },
  ]);
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
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
      <button onClick={deleteRandom}>Apaga qualquer um</button>
    </div>
  );
}

export default ListRender;
