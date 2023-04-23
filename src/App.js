import React, { useEffect, useState } from "react";
import SingleColor from "./SingleColor";
import rgbToHex from "./utils";

import Values from "values.js";

function App() {
  let randomColor = rgbToHex(
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  );
  const [color, setColor] = useState(randomColor);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(randomColor).all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>tints/Shades generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            className={error ? "error" : null}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={randomColor}
          />
          <button
            className="btn"
            type="submit"
            style={{ backgroundColor: color }}
          >
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
