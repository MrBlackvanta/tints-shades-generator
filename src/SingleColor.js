import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, type, index }) => {
  const [copyText, setCopyText] = useState(false);
  const [r, g, b] = rgb;

  const copyColorHandler = () => {
    navigator.clipboard.writeText(rgbToHex(r, g, b));
    setCopyText(true);

    setTimeout(() => {
      setCopyText(false);
    }, 500);
  };

  return (
    <article
      onClick={copyColorHandler}
      class={`color ${type === "shade" ? "color-light" : null}`}
      style={{ backgroundColor: rgbToHex(r, g, b) }}
    >
      <p class="percent-value">{weight}%</p>
      <p class="color-value">{rgbToHex(r, g, b)}</p>

      {copyText && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
