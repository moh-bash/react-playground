import "./App.css";
import { useState } from "react";

function App() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  async function handleClick() {
    setPending((prev) => prev + 1);
    await delay(3000);
    setPending((prev) => prev - 1);
    setCompleted((prev) => prev + 1);
  }

  return (
    <div className="Sction">
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </div>
  );

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}

export default App;
