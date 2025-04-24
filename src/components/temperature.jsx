import { useState } from "react";

export default function Temperatura() {
  const [temperatura, setTemperatura] = useState({
    celsius: 0,
    fahrenheit: 32,
  });

  const handleOnChangeTemperatura = (e) => {
    const { name, value } = e.target;

    if (name === "celsius") {
      setTemperatura({
        celsius: value,
        fahrenheit: (value * 9) / 5 + 32,
      });
    } else {
      setTemperatura({
        fahrenheit: value,
        celsius: (value - 32) * (5 / 9),
      });
    }
  };

  return (
    <>
      <hr />
      <h2>Temperatura:</h2>
      <div>
        <h3>Celsius: </h3>
        <input
          type="number"
          name={TIMES.CELSIUS}
          id="celsius"
          min={0}
          value={temperatura.celsius}
          onChange={handleOnChangeTemperatura}
        />
      </div>
      <div>
        <h3>Fahrenheit: </h3>
        <input
          type="number"
          name={TIMES.FAHRENHEIT}
          id="fahrenheit"
          min="0"
          value={temperatura.fahrenheit}
          onChange={handleOnChangeTemperatura}
        />
      </div>
      <div className="centro">
        <h1>Celsius: {temperatura.celsius}</h1>
        <h1>Fahrenheit: {temperatura.fahrenheit}</h1>
      </div>
    </>
  );
}

const TIMES = Object.freeze({
  CELSIUS: "celsius",
  FAHRENHEIT: "fahrenheit",
})