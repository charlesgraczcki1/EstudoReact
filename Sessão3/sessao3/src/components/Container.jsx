const Container = ({ children, meuvalor }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
      {children}
      <p>o valor é :{meuvalor}</p>
    </div>
  );
};

export default Container;
