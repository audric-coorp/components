import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 3.999h2.586l-6.293 6.293 1.414 1.414L20 5.413v2.586h2v-6h-6zM2 15.999v6h6v-2H5.414l6.293-6.293-1.414-1.414L4 18.585v-2.586z" />
    </g>
  </svg>
);

export default SvgComponent;
