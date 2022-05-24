import { useEffect, useState } from "react";
import Block from "./block";

const Weather = () => {
  const [input, setInput] = useState(" ");
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    if (submit) {
      setTimeout(() => {
        setInput(" ");
        setSubmit(!submit);
      }, 5000);
    }
  }, [submit]);
  return (
    <div>
      <h1>Weather</h1>
      <label>Give temperature value:</label>
      <input
        autoFocus
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setSubmit(!submit)}>Submit</button>
      {submit ? <Block input={input} /> : null}
    </div>
  );
};

export default Weather;
