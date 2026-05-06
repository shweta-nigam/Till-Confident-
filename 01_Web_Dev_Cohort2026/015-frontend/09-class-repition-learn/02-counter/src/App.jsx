import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  function decrease() {
    setValue((prev) => Math.max(prev - 1, 0));
  }

  return (
    <>
      <h3>Value: {value}</h3>
      <div>
        <button
          style={{ background: "black", padding: "10px 20px" }}
          onClick={decrease}
        >
          -
        </button>
        <button
          style={{ background: "green", padding: "10px 20px" }}
          onClick={() => setValue((prev) => Math.min(prev + 1, 10))}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
