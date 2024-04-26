import React, { useState } from "react";
import "./MainBoard.css";

function WeightConverter() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const updateResults = () => {
    const input = parseFloat(inputValue);
    if (input <= 0 || isNaN(input)) {
      setError("Please enter a valid number!");
      setResult(""); // Clear the result when error occurs
    } else {
      setResult((input / 2.2).toFixed(2));
      setError(""); // Clear error when valid input is provided
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Weight Converter</h1>
      <div className="input-container">
        <label htmlFor="pounds">Pounds:</label>
        <input
          type="number"
          id="input"
          className="input"
          step=".1"
          placeholder="Enter number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            updateResults(); // Call updateResults when the input changes
          }}
        />
      </div>
      <p>
        Your weight in kg is: <span id="result">{result}</span>
      </p>
      <p className="error">{error}</p>
    </div>
  );
}

export default WeightConverter;
