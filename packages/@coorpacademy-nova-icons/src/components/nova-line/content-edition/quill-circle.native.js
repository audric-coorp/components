import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      d="M12 22C6.486 22 2 17.513 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill={props.color}
    />
    <Path
      d="M13.332 8.39v2.681l-1.778-1.778a5.777 5.777 0 00-.961.755c-1.612 1.613-1.628 3.031-1.13 3.938L8 15v1l2.02-1.347c.867.696 2.442.907 4.264-.915C16.239 11.783 17 7.331 17 7.331s-1.836.316-3.668 1.059z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
