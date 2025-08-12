import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseValue = () => {
    if (count >= 20) {
      return;
    }
    setCount(count + 1);
  };
  const decreaseValue = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <h1>Project 1</h1>
      <p>Small project to understand Hooks in react</p>
      <h2>{count}</h2>
      <button onClick={increaseValue}>Increase Counter</button>
      <button onClick={decreaseValue}>Decrease Counter</button>
    </>
  );
}

export default App;
