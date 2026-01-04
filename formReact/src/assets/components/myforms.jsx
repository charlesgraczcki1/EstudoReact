import "./MyForms.css";
import { useState } from "react";
const MyForms = () => {
  // 3- Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(email);
  console.log(name);

  return (
    <div>
      {/* 1 - Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder=" Digite seu nome aqui"
            onChange={handleName}
          />
        </div>
        {/* Label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu Email aqui"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForms;
