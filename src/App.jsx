import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="result" value={result} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("C")}>C</button>
      </div>
    </div>
  );
};

export default App;
