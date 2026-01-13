import "./MyForms.css";
import { useState } from "react";
const MyForms = ({ user }) => {
  //6- Gerenciamento de imputs
  // 3- Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(email);
  // console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      console.log("enviando formulario");
      console.log("seu nome é", name, "e seu email é", email);
      console.log("");
      console.log("sua mensagem de bio", bio);
      console.log("sua função é ", role);

      // limpar forms
      setName("");
      setEmail("");
    } else {
      console.log(
        "algum de seus dados  está vazio, você deve preencher os campos corretamente!"
      );
    }
  };

  return (
    <div>
      {/*5- Envio de form */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* manipulação de state */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder=" Digite seu nome aqui"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*3 Label envolvendo o input */}
        <label>
          {/*4 Simplificação de manipulação de state */}
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu Email aqui"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8- Text Area */}
        <label>
          <span>BIO</span>
          <textarea
            name="Bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {name && email ? <input type="submit" value="Enviar" /> : null}
      </form>
      <label>
        <span>Função no sistema</span>
        <select
          name="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        >
          <option value="user">usuário</option>
          <option value="editor">Editor</option>
          <option value="admin">administrador</option>
        </select>
      </label>
    </div>
  );
};

export default MyForms;
