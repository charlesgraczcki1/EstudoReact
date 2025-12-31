import React from "react";

const UserDetails = ({ name, age, profession }) => {
  if (age < 18) {
    return (
      <p>
        Olá,{name} da profissão de {profession}!<br></br> como você tem :{age}
        <br></br> você ainda não pode tirar a habilitação!
      </p>
    );
  } else {
    return (
      <p>
        Olá,{name} da profissão de {profession}!<br></br> como você tem :{age}
        <br></br> você já pode tirar a habilitação!
      </p>
    );
  }
  return;
};

export default UserDetails;
