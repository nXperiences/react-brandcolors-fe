import { getColor } from "./../utils/fore-color";

import React from "react";

function BrandColorCopied({ color }) {
  // let color = props.color;
  return (
    <div
      className="brand-copied-color"
      style={{
        "--bg-color": "#".concat(color),
        "--fore-color": "#".concat(getColor(color)),
      }}
    >
      Copied #{color} to clipboard
    </div>
  );
}

export default BrandColorCopied;
