import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.707 21.707L9 16.414V19h2v-6H5v2h2.586l-5.293 5.293zM19 9h-2.586l5.293-5.293-1.414-1.414L15 7.586V5h-2v6h6z" />
    </g>
  </svg>
);

export default SvgComponent;
