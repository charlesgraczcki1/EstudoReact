import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    {
      id: 1,
      brand: "BMW",
      color: "Black",
      Km: 100000,
      unicoDono: true,
      estadoDeUso: "Reformado",
    },
    {
      id: 2,
      brand: "FERRARI",
      color: "Red",
      Km: 20000,
      unicoDono: true,
      estadoDeUso: "Semi Novo",
    },
    {
      id: 3,
      brand: "BUGATTI",
      color: "Green",
      Km: 80000,
      unicoDono: false,
      estadoDeUso: "Usado",
    },
    {
      id: 4,
      brand: "PORSHE",
      color: "Silver",
      Km: 70000,
      unicoDono: true,
      estadoDeUso: "Reformado",
    },
    {
      id: 5,
      brand: "LAMBORGUINI",
      color: "Gold",
      Km: 0,
      unicoDono: true,
      estadoDeUso: "Novo",
    },
  ];

  return (
    <>
      <div>
        <h1>Carros De Luxo à venda</h1>
      </div>
      {cars.map((cars) => (
        <CarDetails
          key={cars.id}
          brand={cars.brand}
          color={cars.color}
          km={cars.Km}
          unicoDono={cars.unicoDono}
          estadoDeUso={cars.estadoDeUso}
        />
      ))}
    </>
  );
}

export default App;
