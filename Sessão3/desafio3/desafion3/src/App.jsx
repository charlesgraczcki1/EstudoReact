import "./App.css";
import UserDetails from "./Components/UserDetails";

function App() {
  const user = [
    { id: 1, name: "Lucas", age: 18, profession: "TechSupport" },
    { id: 2, name: "Matheus", age: 17, profession: "Estudante" },
    { id: 3, name: "enzo ", age: 14, profession: "Estudante" },
    { id: 4, name: "José", age: 45, profession: "Pedreiro" },
  ];

  return (
    <>
      <div>
        {user.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.age}
            profession={user.profession}
          />
        ))}
      </div>
    </>
  );
}

export default App;
