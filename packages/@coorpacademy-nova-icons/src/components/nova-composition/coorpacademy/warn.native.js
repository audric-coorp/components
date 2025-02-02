import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill={props.color}
      d="M21.895 20.553l-9-18c-.339-.677-1.45-.677-1.789 0l-9 18A.999.999 0 003 22h18c.347 0 .668-.18.851-.474.182-.296.198-.662.044-.973zM11 10h2v6h-2v-6zm1 9.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
    />
  </Svg>
);

export default SvgComponent;
