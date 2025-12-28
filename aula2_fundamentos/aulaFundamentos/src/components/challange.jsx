{
  /* eu sei que esta mais dificil, e não esta apresentando no console.log #mas estava#  porém ao terminar eu coloquei mais dificuldade, e me arrependi kkkkkkkkk
    perdi mó tempo para enterder e ainda mais tempo para fazer*/
}
import { useForm } from "react-hook-form";

const Challange = () => {
  const { register, handleSubmit } = useForm();
  const [resultado, setResultado] = useState(null);

  const onSubmit = (data) => {
    const soma = data.valorA + data.valorB;
    setResultado(soma);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        {...register("valorA", { valueAsNumber: true })}
        placeholder="Valor A"
      />

      <input
        type="number"
        {...register("valorB", { valueAsNumber: true })}
        placeholder="Valor B"
      />

      <button type="submit">Somar</button>

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </form>
  );
};

export default Challange;
