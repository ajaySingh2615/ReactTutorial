import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let obj = {
    username: "ajaysingh",
    age: 18,
  };

  let newArr = [20, 30, 40];

  return (
    <>
      <h1 className="bg-green-400 text-white p-8 rounded-xl mb-4">
        Tailwind Test
      </h1>

      <Card username="Ajay Singh" btnText="click me" />
      <Card username="Shivam Singh" btnText="visit me" />
      <Card />
    </>
  );
}

export default App;
