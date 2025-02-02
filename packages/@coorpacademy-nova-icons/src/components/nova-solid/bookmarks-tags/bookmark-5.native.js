import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.color}
      d="M16.243 2.515H7.758c-.553 0-1 .447-1 1v16.97a1.002 1.002 0 001.707.708L12 17.657l3.536 3.536a1 1 0 001.707-.708V3.515c0-.553-.447-1-1-1z"
    />
  </Svg>
);

export default SvgComponent;
