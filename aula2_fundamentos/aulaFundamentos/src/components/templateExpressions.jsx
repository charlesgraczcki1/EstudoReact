const TemplateExpressions = () => {
  const name = "Charles";
  const data = {
    age: 28,
    job: "suporte técnico e desenvolvedor",
  };
  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <h2>
        Você tem {data.age} anos e trabalha como {data.job}.
      </h2>
    </div>
  );
};
export default TemplateExpressions;
