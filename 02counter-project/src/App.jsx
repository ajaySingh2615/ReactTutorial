import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 16) {
      counter = counter + 1;
    } else {
      console.log("Counter reached 16 or greater. Stopping now.");
      return;
    }

    setCounter(counter);
    console.log("clicked ", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
    } else {
      console.log("Counter reached 0 or smaller. Stopping now.");
      return;
    }
    setCounter(counter);
    console.log("clicked", counter);
  };

  return (
    <>
      <h1>Ajay Singh</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
